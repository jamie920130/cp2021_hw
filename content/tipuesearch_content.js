var tipuesearch = {"pages": [{'title': 'About', 'text': '這是計算機程式課程 2021 Fall 的作業倉儲與網站 template \n \n 41023138 \n 網站倉儲:\xa0 https://github.com/jamie920130/cp2021_hw \xa0 \n 網站連結: https://jamie920130.github.io/cp2021_hw/content/index.html \xa0 \n', 'tags': '', 'url': 'About.html'}, {'title': 'run-1', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run-1.html'}, {'title': 'rungist', 'text': 'rungist 在頁面中採 Javascript 呼叫 Brython 函式的方式, 讓使用者可以直接以 URL Get 執行 Gist 上的 Brython 程式. 建構的目的是讓學員可以利用 URL 繳交統一格式的 Brython 作業程式. 只要在 rungist 頁面加上 ?src=gist_url, 就可以將靜態繪圖或 animation 呈現在畫面中. \n 以下連結左邊為 local 動態網頁編輯用, 而右邊的連結則為遠端 rungist 的 demo 範例. \n Cango gear  (for local link only) ( Cango gear ) \n Spur with form input  (for local link only) ( Spur with form input ) \n local three gears  ( remote three gears ) \n local clock   remote clock \n local fourbar   remote fourbar  (準備納入:  https://github.com/mdecourse/Wiper-Mechanism ) \n https://prairielearn.readthedocs.io/en/latest/PrairieDraw/ \n https://github.com/mdecourse/PrairieDraw.js \n rungist  (for local edit) \n  導入 brython 程式庫  \n \n \n \n  啟動 Brython  \n \n  頁面載入後執行 brythonListener()  \n \n  建立讓 Javascript 執行的 brython 程式  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'rungist.html'}, {'title': 'rungist src', 'text': '以下為上一頁 rungist 的原始碼: \n <h2>rungist</h2>\n<p>rungist 在頁面中採 Javascript 呼叫 Brython 函式的方式, 讓使用者可以直接以 URL Get 執行 Gist 上的 Brython 程式. 建構的目的是讓學員可以利用 URL 繳交統一格式的 Brython 作業程式. 只要在 rungist 頁面加上 ?src=gist_url, 就可以將靜態繪圖或 animation 呈現在畫面中.</p>\n<p>以下連結左邊為 local 動態網頁編輯用, 而右邊的連結則為遠端 rungist 的 demo 範例.</p>\n<p><a href="/get_page/rungist?src=https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py">Cango gear</a> (for local link only) (<a href="https://mde.tw/cp2021/content/rungist.html?src=https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/cango_gear1.py">Cango gear</a>)</p>\n<p><a href="/get_page/rungist?src=https://gist.githubusercontent.com/mdecourse/626206cf3b2a9a9a69f7ce4bb4a116f0/raw/970e2653a7207828b3814c2c867892903734522a/spur_set_num.py">Spur with form input</a> (for local link only) (<a href="https://mde.tw/cp2021/content/rungist.html?src=https://gist.githubusercontent.com/mdecourse/626206cf3b2a9a9a69f7ce4bb4a116f0/raw/970e2653a7207828b3814c2c867892903734522a/spur_set_num.py">Spur with form input</a>)</p>\n<p><a href="/get_page/rungist?src=https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/three_spur_rotating.py">local three gears</a> (<a href="https://mde.tw/cp2021/content/rungist.html?src=https://gist.githubusercontent.com/mdecourse/e896a4705a95ac8cc4147b355b0e87ef/raw/8954b8280c524c5781dc3c0b3565bc489d3aa3a3/three_spur_rotating.py">remote three gears</a>)</p>\n<p><a href="/get_page/rungist?src=https://gist.githubusercontent.com/mdecourse/379f02862e9dfd95dbc5241d4faa2ad4/raw/e3dc77e68bbfb8f00eef2e78d3c8d2323b0f17da/clock.py">local clock</a> <a href="https://mde.tw/cp2021/content/rungist.html?src=https://gist.githubusercontent.com/mdecourse/379f02862e9dfd95dbc5241d4faa2ad4/raw/e3dc77e68bbfb8f00eef2e78d3c8d2323b0f17da/clock.py">remote clock</a></p>\n<p><a href="/get_page/rungist/1">rungist</a> (for local edit)</p>\n<!-- 導入 brython 程式庫 -->\n<p></p>\n<script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<!-- 啟動 Brython -->\n<script>// <![CDATA[\nwindow.onload=function(){\n    brython();\n}\n// ]]></script>\n<!-- 頁面載入後執行 brythonListener() -->\n<script>// <![CDATA[\n$(document).ready( function() {\n    brythonListener();\n});\n// ]]></script>\n<!-- 建立讓 Javascript 執行的 brython 程式 -->\n<script type="text/python">// <![CDATA[\nfrom browser import document\nfrom browser import window\n\ndef run():\n    prog = open(document.query["src"]).read()\n    ns = {\'__name__\':\'__main__\'}\n    exec(prog, ns)\n\n# 透過 window 將 Brython 的 run() 函式與 Javascript 的  brythonListner 函式對應\nwindow.brythonListener = run()\n// ]]></script>\n<!-- Brython 程式執行的結果, 都以 brython_div 作為切入位置 -->\n<div id="brython_div"></div>\n<!-- 導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫 -->\n<script src="https://mde.tw/cp2021/cmsimde/static/Cango-24v03-min.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/gearUtils-09.js"></script>\n<script src="https://mde.tw/cp2021/cmsimde/static/SVGpathUtils-6v03-min.js"></script> \n  導入 brython 程式庫  \n \n \n  啟動 Brython  \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \nset Local=C:\\2021_cadlab_portable\\data\n \n%Disk%:\n \nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n \nset PYTHONHOME=%Local%\\Python395\n \nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n \nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n \npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n \nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n \nREGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n \nExit\n \n Hybrid\n 將 start_ipv4.bat 與部分檔案放在 USB 隨身碟, 使用 C 槽的 Python395 與 Portablegit: \n start_ipv4.bat, data, tmp, wscite 與 home_ipv4, home_ipv6 放在隨身碟: @echo off\nset Disk=y\nsubst %Disk%: "data"\n \nset Local=C:\\2021_cadlab_portable\\data\n \n%Disk%:\n \nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n \nset PYTHONHOME=%Local%\\Python395\n \nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n \nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n \npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n \nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n \nREGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n \nExit \n Hybrid\n 將 start_ipv4.bat 與部分檔案放在 USB 隨身碟, 使用 C 槽的 Python395 與 Portablegit: \n start_ipv4.bat, data, tmp, wscite 與 home_ipv4, home_ipv6 放在隨身碟:', 'tags': '', 'url': 'rungist src.html'}, {'title': 'Hybrid', 'text': '將 start_ipv4.bat 與部分檔案放在 USB 隨身碟, 使用 C 槽的 Python395 與 Portablegit: \n start_ipv4.bat, data, tmp, wscite 與 home_ipv4, home_ipv6 放在隨身碟: \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \nset Local=C:\\2021_cadlab_portable\\data\n \n%Disk%:\n \nset HomePath=%Disk%:\\home_ipv4\nset HomeDrive=%Disk%:\\home_ipv4\nset Home=%Disk%:\\home_ipv4\nset USERPROFILE=%Disk%:\\home_ipv4\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \nset PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages;\n \nset PYTHONHOME=%Local%\\Python395\n \nREM 使用 putty 設定 git ssh 連線\nset GIT_SSH=%Disk%:\\putty\\plink.exe\n \nREM 設定跟 Python 有關的命令搜尋路徑\nset path_python=%Local%\\Python395;%Local%\\Python395\\Scripts;\nset path_portablegit=%Local%\\portablegit_2.31.1\\bin;\n \npath=%Disk%:;%path_python%;%path_portablegit%;%path%;\n \nREM ref: https://drive.google.com/file/d/1S0XYN-1MKxo0KFYxs0pFTcTrr8NL4n1b/view\n \nREGEDIT.EXE /S %Disk%:\\putty_github_com.reg;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wScite\\SciTE.exe\nstart /MIN %Disk%:\\wScite\\SciTE.exe\n \nExit \n HW1 \n', 'tags': '', 'url': 'Hybrid.html'}, {'title': 'HW1', 'text': 'HW1 - 網際動畫與 touch typing 佔學期成績 20%. \n HW1 必須在 2021.10.20 22:00 之前完成 . \n HW1 具體項目成果回報區 將於 2021.09.23 開啟, 於 \xa0 2021.10.20 22:00 關閉 \n \n 請至 \xa0 https://github.com \xa0 申請 Github 帳號後, 至 \xa0 https://mde.tw/cp2021/content/Task1.html \xa0 頁面, 將左右碰撞移動的紅色方塊, 改為先移動到水平畫面中心點位置後, 接著上下碰撞移動. \n 請將 1. 的程式碼存入個人 Gist 區 ( 說明 ). \n 請在 1. 的程式中, 加入與 \xa0 Cango 頁面 \xa0 Fourbar 程式碼相同功能的啟動按鈕, 讓使用者可以利用按鈕啟動或中斷紅色方塊上下碰撞移動. 完成後請將程式碼存入個人 Gist 區. \n 請在 Gist 檔案編輯區, 利用鍵盤輸入 \xa0 https://docs.github.com/en/github/writing-on-github/editing-and-sharing-content-with-gists/creating-gists#about-gists \xa0 中的這段英文內容, 請利用手機計時, 大概需要多少時間? 請將此段練習打字的內容與所需時間存入 Gist 檔案中. \n 請至少練習 key in 這段英文內容三次, 然後看看是否已經了解如何透過電腦鍵盤 touch typing? \n 接下來請利用中文輸入 \xa0 https://ithelp.ithome.com.tw/articles/10206233 \xa0 的第一段中文說明, 請利用手機計時, 大概需要多少時間? \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'HW2', 'text': 'HW2 - 可攜程式系統與個人網站佔學期成績 20%. \n HW2 必須在 2021.11.03 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.10.25 開啟, 於  2021.11.03 22:00 關閉 \n 可攜程式系統與 Python 範例程式收集整理 \n 1. 請準備一個至少 64 GB 大小的 USB 3.0 以上隨身碟 (或外接 SSD), 根據  Task2  中的說明, 建立自己的可攜程式系統.\xa0 \n 2. 請登入 Github 帳號後, 連線至  https://github.com/mdecourse/cp2021_hw  後, 透過  Use this template  按鈕建立自己的 cp2021_hw 倉儲. 並至該倉儲的 Settings -> Pages -> Source 將 main 分支設為 Github Pages 的 root (也就是選擇將倉儲的 main 分支設為對應網站的根目錄). \n 3. 請將 HW1 與 HW2 的作業內容登錄至個人的 cp2021_hw 倉儲與網站中. (學習如何透過 git 指令修改倉儲中的版本內容) \n 4. 請在個人作業網站的 HW2 區域下增設一個 H2 頁面, 將該網頁標題命名為 run, 可以如  run  頁面中的內容, 並且利用此頁面收集 Python 範例程式. (例如: 可自動執行的貪食蛇:  https://mde.tw/cp2021/content/run.html?src=https://gist.githubusercontent.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439/raw/2160a12b9fec9707a120a383ed5d38b9b78a02cf/snake.py  將  https://gist.github.com/mdecourse/d306a1f57e53bfd6466eaae20bcb9439  作為  https://mde.tw/cp2021/content/run.html  頁面中 src 變數的值, 就可以在頁面中導入程式碼並執行)', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': '\n HW3 - AI 貪食蛇佔學期成績 30%. \n HW3 必須在 2021.12.22 22:00 之前完成. \n HW3 具體項目成果回報區 將於 2021.11.09 開啟, 於  2021.12.22 22:00 關閉 \n 網際貪食蛇的逆襲, 誰的 自動執行貪食蛇 能夠破紀錄? 目前直覺貪食蛇紀錄為 45 節 (除了蛇身節數外, 應該還要置入出現紅色標的物後的總完食時間). \n 手動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式說明與整理. \n 自動執行貪食蛇 程式的改進. \n 參考資料: \n https://mde.tw/cp2021/content/Task3.html \n Brython snake 原始來源:  https://medium.com/swlh/sick-of-javascript-just-use-browser-python-4b9679efe08b \n https://github.com/mdecourse/snake-Q-Learning \n https://towardsdatascience.com/teaching-a-computer-how-to-play-snake-with-q-learning-93d0a316ddc0 \n https://github.com/mdecourse/SnakeQlearning \n https://medium.com/@italohdc/learnsnake-teaching-an-ai-to-play-snake-using-reinforcement-learning-q-learning-b63ac23dfdd1 \n https://towardsdatascience.com/snake-played-by-a-deep-reinforcement-learning-agent-53f2c4331d36 \n https://www.geeksforgeeks.org/ai-driven-snake-game-using-deep-q-learning/ \n https://www3.hs-albsig.de/wordpress/point2pointmotion/2020/10/09/deep-reinforcement-learning-with-the-snake-game/ \n 2016_Exploration of Reinforcement Learning to SNAKE.pdf \n train_a_snake_with_reinforceme.pdf \n https://medium.com/@hugo.sjoberg88/using-reinforcement-learning-and-q-learning-to-play-snake-28423dd49e9b \n https://github.com/mdecourse/Snake-Reinforcement-Learning \n Autonomous-Agents-in-Snake-Game-via-Deep-Reinforcement-Learning.pdf \n 延伸應用: \n \n \n \n \n https://github.com/mdecourse/snake-ai-pytorch', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 30% \n Final Project 必須在 2022.01.05 22:00 之前完成 . \n Final Project 具體項目成果回報區 將於 2021.11.09 開啟, 於  2022.01.05 22:00 關閉 \n 利用 Brython 寫一個會 令人想玩 的網際遊戲. \n 參考章節: \n \n 專題摘要 \n 資料蒐集 \n 設計動機 \n 設計方法 \n 結果與討論 \n 附錄 \n \n 參考資料: \n https://github.com/collections/web-games \n https://github.com/topics/web-game \n https://github.com/topics/browser-game \n https://github.com/leereilly/games \n https://bmsleight.github.io/brython-blocks/ \n https://github.com/mdecourse/brython-blocks \n', 'tags': '', 'url': 'Final Project.html'}, {'title': 'run-2', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n', 'tags': '', 'url': 'run-2.html'}]};