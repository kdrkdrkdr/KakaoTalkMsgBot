/*
 * 화홍중학교 홍보용 카카오톡 
 * 개발자 : 김경민(30804)
 * 최종수정 날짜 : 2019-06-19
 * 
 * 소스 무단 배포 및 수정하시면 지구 끝까지 
 * 쫓아가서 숟가락으로 때릴겁니다.
 */

function response(room, msg, sender, isGroupChat, replier, ImageDB, packageName, threadId) 
{

    function replymsg(info, url) 
    { 
        if (url == null)
            url = "";
        else
            url = "\n" + url;
        replier.reply("[화홍중] '" + info + "' 입니다!" + url);
    }

    function helpmsg(cmd, arr)
    {
        helpstr = "";
        helpstr += cmd + " [사용법] 입니다!\n\n[옵션]";
        for (var i = 0; i<arr.length; i++)
        {
            helpstr += "\n  " + arr[i];
        }
        if (cmd == "")
        {
            helpstr = helpstr.replace(" [", "[")
        }
        helpstr += "\n\n사용법 -> " + cmd + " [옵션]";
        replier.reply(helpstr);
    }

    msg = msg.trim();
    usage = "사용법";
    
    try 
    {
        if (msg == usage)
        {
            helpmsg("", ["/학교소개", "/학교운영", "/선생님마당", "학부모마당", "학생마당", "학교혁신", "학교제정공개", "학교운영위원회", "특별실", "이용안내"]);
        }

        else if (msg.indexOf("/학교소개") == 0)
        {
            if (msg.indexOf(usage) != -1) 
            { 
                helpmsg("/학교소개", ["인사말", "교육목표", "학교연혁", "학교현황", "학교상징", "교직원소개", "교실배치도", "학교홍보동영상", "학교교가", "찾아오시는길", "교육목표"]);
            } 
            else if (msg.indexOf("인사말") != -1) { replymsg("인사말", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_1.html&shell=/index.shell:254") }
            else if (msg.indexOf("교육목표") != -1) { replymsg("교육목표", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_2.html&shell=/index.shell:253") }
            else if (msg.indexOf("학교연혁") != -1) { replymsg("학교연혁", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_1.html&shell=/index.shell:252") }
            else if (msg.indexOf("학교현황") != -1) { replymsg("학교현황", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_4.html&shell=/index.shell:248") }
            else if (msg.indexOf("학교상징") != -1) { replymsg("학교상징", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_5.html&shell=/index.shell:247") }
            else if (msg.indexOf("교직원소개") != -1) { replymsg("교직원소개", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_6.html&shell=/index.shell:266") }
            else if (msg.indexOf("교실배치도") != -1) { replymsg("교실배치도", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_7.html&shell=/index.shell:312") }
            else if (msg.indexOf("학교홍보동영상") != -1) { replymsg("학교홍보동영상", "http://www.hwahong.ms.kr/b_hongbo.brd?shell=/index.shell:267") }
            else if (msg.indexOf("학교교가") != -1) { replymsg("학교교가", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_8.html&shell=/index.shell:268") }
            else if (msg.indexOf("찾아오시는길") != -1) { replymsg("찾아오시는길", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int1_9.html&shell=/index.shell:269") }
            else 
            { 
                helpmsg("/학교소개", ["인사말", "교육목표", "학교연혁", "학교현황", "학교상징", "교직원소개", "교실배치도", "학교홍보동영상", "학교교가", "찾아오시는길", "교육목표"]);
            }
        }

        else if (msg.indexOf("/학교운영") == 0)
        {
            if (msg.indexOf(usage) != -1) 
            {
                helpmsg("/학교운영", ["부서별자료실", "학사일정", "행정자료실", "학교규정", "방과후학교"]);
            }
            else if (msg.indexOf("부서별자료실") != -1) { replymsg("부서별자료실", "http://www.hwahong.ms.kr/b_part1.brd?shell=/index.shell:282") }
            else if (msg.indexOf("학사일정") != -1) { replymsg("학사일정", "http://www.hwahong.ms.kr/segio/plan_v2/index.php?shell=/index.shell:258") }
            else if (msg.indexOf("행정자료실") != -1) { replymsg("행정자료실", "http://www.hwahong.ms.kr/b_admin.brd?shell=/index.shell:257") }
            else if (msg.indexOf("학교규정") != -1) { replymsg("학교규정", "http://www.hwahong.ms.kr/b_rule.brd?shell=/index.shell:256") }
            else if (msg.indexOf("방과후학교") != -1) { replymsg("방과후학교", "http://www.hwahong.ms.kr/afterschool.brd?shell=/index.shell:393") }
            else 
            { 
                helpmsg("/학교운영", ["부서별자료실", "학사일정", "행정자료실", "학교규정", "방과후학교"]);
            }
        }

        else if (msg.indexOf("/선생님마당") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/선생님마당", ["공지사항", "연수자료", "교직원게시판", "교수학습센터"]);
            }
            else if (msg.indexOf("공지사항") != -1) { replymsg("공지사항", "http://www.hwahong.ms.kr/b_teacher1.brd?shell=/index.shell:259") }
            else if (msg.indexOf("연수자료") != -1) { replymsg("연수자료", "http://www.hwahong.ms.kr/b_teacher2.brd?shell=/index.shell:207") }
            else if (msg.indexOf("교직원게시판") != -1) { replymsg("교직원게시판", "http://www.hwahong.ms.kr/b_teacher3.brd?shell=/index.shell:205") }
            else if (msg.indexOf("교수학습센터") != -1) { replymsg("교수학습센터", "http://www.hwahong.ms.kr/b_study.brd?shell=/index.shell:384") }
            else 
            {
                helpmsg("/선생님마당", ["공지사항", "연수자료", "교직원게시판", "교수학습센터"]);
            }
        }

        else if (msg.indexOf("/학부모마당") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/학부모마당", ["자유게시판", "건의사항", "가정통신문"]);
            }
            else if (msg.indexOf("자유게시판") != -1) { replymsg("자유게시판", "http://www.hwahong.ms.kr/b_parents1.brd?shell=/index.shell:94") }
            else if (msg.indexOf("건의사항") != -1) { replymsg("건의사항", "http://www.hwahong.ms.kr/b_parents2.brd?shell=/index.shell:16") }
            else if (msg.indexOf("가정통신문") != -1) { replymsg("가정통신문", "http://www.hwahong.ms.kr/b_parents3.brd?shell=/index.shell:288") }
            else
            {
                helpmsg("/학부모마당", ["자유게시판", "건의사항", "가정통신문"]);
            }
        }

        else if (msg.indexOf("/학생마당") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/학생마당", ["과제제출", "동아리", "축하합니다", "상담실", "각종양식다운로드"]);
            }
            else if (msg.indexOf("과제제출") != -1) { replymsg("과제제출", "http://www.hwahong.ms.kr/b_student1.brd?shell=/index.shell:262") }
            else if (msg.indexOf("동아리") != -1) { replymsg("동아리", "http://www.hwahong.ms.kr/b_student2.brd?shell=/index.shell:261") }
            else if (msg.indexOf("축하합니다") != -1) { replymsg("축하합니다", "http://www.hwahong.ms.kr/b_student3.brd?shell=/index.shell:260") }
            else if (msg.indexOf("상담실") != -1) { replymsg("상담실", "http://www.hwahong.ms.kr/b_student4.brd?shell=/index.shell:295") }
            else if (msg.indexOf("각종양식다운로드") != -1) { replymsg("각종양식다운로드", "http://www.hwahong.ms.kr/b_form.brd?shell=/index.shell:290") }
            else { helpmsg("/학생마당", ["과제제출", "동아리", "축하합니다", "상담실", "각종양식다운로드"]); }
        }

        else if (msg.indexOf("/학교혁신") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/학교혁신", ["업무분장", "학교평가"]);
            }
            else if (msg.indexOf("업무분장") != -1) { replymsg("업무분장", "http://www.hwahong.ms.kr/bunjang.brd?shell=/index.shell:317") }
            else if (msg.indexOf("학교평가") != -1) { replymsg("학교평가", "http://www.hwahong.ms.kr/bunjang.brd?shell=/index.shell:318") }
            else
            { 
                helpmsg("/학교혁신", ["업무분장", "학교평가"]); 
            }
        }

        else if (msg.indexOf("/학교제정공개") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/학교제정공개", ["예결산내용", "신용카드사용내역", "물품및공사계약", "수익자부담경비집행내역", "감사결과", "발전기금", "기타"]);
            }
            else if (msg.indexOf("예결산내용") != -1) { replymsg("예결산내용", "http://www.hwahong.ms.kr/b_finance1.brd?shell=/index.shell:328") }
            else if (msg.indexOf("신용카드사용내역") != -1) { replymsg("신용카드사용내역", "http://www.hwahong.ms.kr/b_finance4.brd?shell=/index.shell:325") }
            else if (msg.indexOf("물품및공사계약") != -1) { replymsg("물품및공사계약", "http://www.hwahong.ms.kr/b_finance5.brd?shell=/index.shell:333") }
            else if (msg.indexOf("수익자부담경비집행내역") != -1) { replymsg("수익자부담경비집행내역", "http://www.hwahong.ms.kr/b_finance8.brd?shell=/index.shell:336") }
            else if (msg.indexOf("감사결과") != -1) { replymsg("감사결과", "http://www.hwahong.ms.kr/b_finance11.brd?shell=/index.shell:215") }
            else if (msg.indexOf("발전기금") != -1) { replymsg("발전기금", "http://www.hwahong.ms.kr/b_finance12.brd?shell=/index.shell:214") }
            else if (msg.indexOf("기타") != -1) { replymsg("기타", "http://www.hwahong.ms.kr/b_finance13.brd?shell=/index.shell:209") }
            else
            { 
                helpmsg("/학교제정공개", ["예결산내용", "신용카드사용내역", "물품및공사계약", "수익자부담경비집행내역", "감사결과", "발전기금", "기타"]); 
            }
        }

        else if (msg.indexOf("/학교운영위원회") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/학교운영위원회", ["학교운영위원회란", "운영규정", "구성현황", "은영내용"]);
            }
            else if (msg.indexOf("학교운영위원회란") != -1) { replymsg("학교운영위원회란", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int8_1.html&shell=/index.shell:313") }
            else if (msg.indexOf("운영규정") != -1) { replymsg("운영규정", "http://www.hwahong.ms.kr/b_committee1.brd?shell=/index.shell:314") }
            else if (msg.indexOf("구성현황") != -1) { replymsg("구성현황", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/int8_2.html&shell=/index.shell:315") }
            else if (msg.indexOf("운영내용") != -1) { replymsg("운영내용", "http://www.hwahong.ms.kr/b_committee2.brd?shell=/index.shell:316") }
            else
            { 
                helpmsg("/학교운영위원회", ["학교운영위원회란", "운영규정", "구성현황", "은영내용"]); 
            }
        }

        else if (msg.indexOf("/특별실") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/특별실", ["급식실", "꿈마루도서관", "학교폭력신고함", "방송실", "보건실"]);
            }
            else if (msg.indexOf("급식실") != -1) { replymsg("급식실", "http://www.hwahong.ms.kr/segio/meal_v2/index.php?shell=/index.shell:346") }
            else if (msg.indexOf("꿈마루도서관") != -1) { replymsg("꿈마루도서관", "http://www.hwahong.ms.kr/b_library.brd?shell=/index.shell:348") }
            else if (msg.indexOf("학교폭력신고함") != -1) { replymsg("학교폭력신고함", "http://www.hwahong.ms.kr/b_special1.brd?shell=/index.shell:342") }
            else if (msg.indexOf("방송실") != -1) { replymsg("방송실", "http://www.hwahong.ms.kr/b_special2.brd?shell=/index.shell:341") }
            else if (msg.indexOf("보건실") != -1) { replymsg("보건실", "http://www.hwahong.ms.kr/b_special3.brd?shell=/index.shell:340") }
            else
            { 
                helpmsg("/특별실", ["급식실", "꿈마루도서관", "학교폭력신고함", "방송실", "보건실"]); 
            }
        }

        else if (msg.indexOf("/화홍소식") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/화홍소식", ["공지사항", "대회안내", "화홍앨범", "화홍동영상", "녹색성장", "방과후학교", "진학자료실"]);
            }
            else if (msg.indexOf("공지사항") != -1) { replymsg("공지사항", "http://www.hwahong.ms.kr/notice.brd?shell=/index.shell:357") }
            else if (msg.indexOf("대회안내") != -1) { replymsg("대회안내", "http://www.hwahong.ms.kr/contest.brd?shell=/index.shell:356") }
            else if (msg.indexOf("화홍앨범") != -1) { replymsg("화홍앨범", "http://www.hwahong.ms.kr/photo.brd?shell=/index.shell:355") }
            else if (msg.indexOf("화홍동영상") != -1) { replymsg("화홍동영상", "http://www.hwahong.ms.kr/video.brd?shell=/index.shell:354") }
            else if (msg.indexOf("녹색성장") != -1) { replymsg("녹색성장", "http://www.hwahong.ms.kr/green.brd?shell=/index.shell:352") }
            else if (msg.indexOf("방과후학교") != -1) { replymsg("방과후학교", "http://www.hwahong.ms.kr/afterschool.brd?shell=/index.shell:351") }
            else if (msg.indexOf("진학자료실") != -1) { replymsg("진학자료실", "http://www.hwahong.ms.kr/enterschool.brd?shell=/index.shell:350") }
            else
            { 
                helpmsg("/화홍소식", ["공지사항", "대회안내", "화홍앨범", "화홍동영상", "녹색성장", "방과후학교", "진학자료실"]); 
            }
        }

        else if (msg.indexOf("/이용안내") == 0)
        {
            if (msg.indexOf(usage) != -1)
            {
                helpmsg("/이용안내", ["사이트맵", "개인정보처리방침", "저작권신고", "이용약관", "이메일무단수집거부"]);
            }
            else if (msg.indexOf("사이트맵") != -1) { replymsg("사이트맵", "http://www.hwahong.ms.kr/icons/app/cms/sitemap.php?shell=/index.shell:182") }
            else if (msg.indexOf("개인정보처리방침") != -1) { replymsg("개인정보처리방침", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/agree/privacy.html&shell=/index.shell:116") }
            else if (msg.indexOf("저작권신고") != -1) { replymsg("저작권신고", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/agree/privacy2.html&shell=/index.shell:117") }
            else if (msg.indexOf("이용약관") != -1) { replymsg("이용약관", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/agree/privacy3.html&shell=/index.shell:18") }
            else if (msg.indexOf("이메일무단수집거부") != -1) { replymsg("이메일무단수집거부", "http://www.hwahong.ms.kr/icons/app/cms/?html=/home/agree/privacy4.html&shell=/index.shell:132") }
            else 
            {
                helpmsg("/이용안내", ["사이트맵", "개인정보처리방침", "저작권신고", "이용약관", "이메일무단수집거부"]);
            }
        }

        else
        {
            helpmsg("", ["/학교소개", "/학교운영", "/선생님마당", "/학부모마당", "/학생마당", "/학교혁신", "/학교제정공개", "/학교운영위원회", "/특별실", "/이용안내"]);
        }
    }

    catch(e)
    {
        replier.reply("오류가 발생했어요 ㅠㅠ!");
    }
}
