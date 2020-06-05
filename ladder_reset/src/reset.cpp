# include <iostream>
 # include <vector>
 # include <algorithm>
 # include <string>
 # include <filesystem>
 # include <process.h>
using namespace std;
namespace filesys = std::filesystem;

/*!
 * Ladder mulefile resetter
 *
 * To reset mule files from ladder to non-ladder status.
 * By default, all ladder files will be turned into nonladder files.
 * Directories can be skipped by providing '-skip foldername1,foldername2'
 * The behaviour can be overwritten using flags -old/-new
 * (so you can reverse from non-ladder to ladder also if you accidentally converted a bunch)
 *
 * Just specify a comma separated list of extensions (But make sure to match the indices of both lists).
 *
 * Default behaviour is:
 * path/to/reset.exe -old .sel.txt,.hel.txt,.scl.txt,.hcl.txt -new .sen.txt,.hen.txt,.scn.txt,.hcn.txt
 *
 * Authors: Fa-b
 * Date: 2020/06/04
 */

std::vector < std::string > getMuleFilesInDir(const std::string & dirPath, const std::vector < std::string > dirSkipList = {}, const std::vector < std::string > fileSearchList = {}, std::vector < std::string > fileReplaceList = {}) {
    if (fileReplaceList.size() != fileSearchList.size())
        fileReplaceList = fileSearchList;

    std::vector < std::string > listOfFiles;
    try {
        if (filesys::exists(dirPath) && filesys::is_directory(dirPath)) {
            filesys::recursive_directory_iterator iter(dirPath);
            filesys::recursive_directory_iterator end;
            while (iter != end) {
                std::string path = iter->path().string();
                if (filesys::is_directory(iter->path()) &&
                    (std::find(dirSkipList.begin(), dirSkipList.end(), iter->path().filename()) != dirSkipList.end())) {
                    iter.disable_recursion_pending();
                } else {
                    std::vector < std::string > ::const_iterator it = std::find_if(fileSearchList.begin(), fileSearchList.end(), [path](std::string x) {
                            return (x == path.substr(path.length() - x.length()));
                        });
                    if (it != fileSearchList.end()) {
                        std::rename(path.c_str(), (path.substr(0, path.length() - it->length()) + fileReplaceList.at(it - fileSearchList.begin())).c_str());
                        listOfFiles.push_back(path);
                    }
                }
                error_code ec;
                iter.increment(ec);
                if (ec) {
                    std::cerr << "Error While Accessing : " << iter->path().string() << " :: " << ec.message() << '\n';
                }
            }
        }
    } catch (std::system_error & e) {
        std::cerr << "Exception :: " << e.what();
    }
    return listOfFiles;
}

void tokenize(std::string const & str, const char delim, std::vector < std::string >  & out) {
    size_t start;
    size_t end = 0;
    while ((start = str.find_first_not_of(delim, end)) != std::string::npos) {
        end = str.find(delim, start);
        out.push_back(str.substr(start, end - start));
    }
}

int main(int argc, char * argv[]) {

    std::vector < std::string > skipDirs = {};
    std::vector < std::string > oldExtensions = {
        ".sel.txt",
        ".hel.txt",
        ".scl.txt",
        ".hcl.txt"
    };
    std::vector < std::string > newExtensions = {
        ".sen.txt",
        ".hen.txt",
        ".scn.txt",
        ".hcn.txt"
    };

    for (int i = 1; i < argc; ++i) {
        if (std::string(argv[i]) == "-old") {
            if (i + 1 < argc) {
                oldExtensions = {};

                tokenize(argv[++i], ',', oldExtensions);
            } else {
                std::cerr << "-old option requires a comma separated list as argument." << std::endl;
                return 1;
            }
        } else if (std::string(argv[i]) == "-new") {
            if (i + 1 < argc) {
                newExtensions = {};

                tokenize(argv[++i], ',', newExtensions);
            } else {
                std::cerr << "-new option requires a comma separated list as argument." << std::endl;
                return 1;
            }
        } else if (std::string(argv[i]) == "-skip") {
            if (i + 1 < argc) {
                skipDirs = {};

                tokenize(argv[++i], ',', skipDirs);
            } else {
                std::cerr << "-skip option requires a comma separated list as argument." << std::endl;
                return 1;
            }
        }
    }

    std::cout << "Replacing: ";
    for (std::vector < std::string > ::const_iterator i = oldExtensions.begin(); i != oldExtensions.end(); ++i)
        std::cout <<  * i << ' ';
    std::cout << std::endl;
    std::cout << "With: ";
    for (std::vector < std::string > ::const_iterator i = newExtensions.begin(); i != newExtensions.end(); ++i)
        std::cout <<  * i << ' ';
    std::cout << std::endl;
    std::cout << "Skipping: ";
    for (std::vector < std::string > ::const_iterator i = skipDirs.begin(); i != skipDirs.end(); ++i)
        std::cout <<  * i << ' ';
    std::cout << std::endl;

    std::string dirPath = filesys::current_path().string();
    std::vector < std::string > listOfFiles = getMuleFilesInDir(dirPath, skipDirs, oldExtensions, newExtensions);
    for (auto str: listOfFiles)
        std::cout << str << std::endl;

    std::cout << "Press any key to continue..";
    std::cin.get();
    return 0;
}
