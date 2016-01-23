'use strict';

angular.module('confusionApp', [])

    .controller('MenuController', ['$scope', function($scope) {

      $scope.blur = true;
      $scope.checked = true;

      $scope.toggleBlur = function() {
        $scope.blur = !$scope.blur;
      };

      $scope.forceBlur = function() {
        $scope.blur = true;
      };

      $scope.images = [
        {
          "celeb": "Shah Rukh Khan",
          "industry": "bollywood",
          "path": "http://www.starok.com/beta/html/photos/more/shahrukh-khan-5625.jpg"
        },
        {
          "celeb": "Madhuri Dixit",
          "industry": "hollywood",
          "path": "http://bollywoodfans.in/uploads/gallery/category_24/gallery_4_24_53681.jpg"
        },
        {
          "celeb": "Vivek Oberoi",
          "industry": "hollywood",
          "path": "http://www.pinkvilla.com/files/zva_0.jpg?1409743132"
        },
        {
          "celeb": "Amitabh Bachchan",
          "industry": "hollywood",
          "path": "http://www.clipper28.com/images/Sep_2015/12-09-2015/Amitabh-Bachchan.jpg"
        },
        {
          "celeb": "Hrithik Roshan",
          "industry": "bollywood",
          "path": "http://img.bollycurry.com/wallpapers/1024x768/17944-hrithik-roshan.jpg"
        },
        {
          "celeb": "Salman Khan",
          "industry": "bollywood",
          "path": "http://media.yah.in/uploads/images/org/sad_salman_khan_6188.jpg"
        },
        {
          "celeb": "Akshay Kumar",
          "industry": "bollywood",
          "path": "http://media.yah.in/uploads/images/org/angry_akshay_kumar_8358.jpg"
        },
        {
          "celeb": "Abhishek Bachchan",
          "industry": "bollywood",
          "path": "http://repos.hungama.com/wallpaper/display%20image/1024x768%20jpeg/6182183.jpg"
        },
        {
          "celeb": "Fardeen Khan",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/24405-fardeen-khan.jpg"
        },
        {
          "celeb": "Twinkle Khanna",
          "industry": "bollywood",
          "path": "http://yahin.s3-ap-southeast-1.amazonaws.com/photos/images/twinkle-khanna-5_14273.jpg"
        },
        {
          "celeb": "Shah Rukh Khan",
          "industry": "bollywood",
          "path": "http://www.bollywoodwizard.com/1024x768/shahrukh_khan_035_1024x768_spse.jpg"
        },
        {
          "celeb": "Sharman Joshi",
          "industry": "bollywood",
          "path": "http://2.bp.blogspot.com/-SGFOMM2XJis/U60WQCzZHcI/AAAAAAAAJX8/F8vQe8v8Djs/s1600/url.jpg"
        },
        {
          "celeb": "Ayesha Takia",
          "industry": "bollywood",
          "path": "http://www.iluvcinema.in/hindi/wp-content/gallery/ayesha-takia-pics/Ayesha-Takia-Pics-12.jpg"
        },
        {
          "celeb": "Sunny Deol",
          "industry": "bollywood",
          "path": "http://www.wallpaperbasti.com/wallpapers/bollywood/actor/sunny-deol/11.jpg"
        },
        {
          "celeb": "Abhay Deol",
          "industry": "bollywood",
          "path": "http://www.bollywoodbangbang.com/images/image/abhay_deol.jpg"
        },
        {
          "celeb": "Karishma Kapoor",
          "industry": "bollywood",
          "path": "http://1.bp.blogspot.com/--mPHiHuE9Fw/UEhTasAvTvI/AAAAAAAAB-0/jCkavgR2FGI/s1600/Karishma+Kapoor+Wallpapers+-+5.jpg"
        },
        {
          "celeb": "Sanjay Dutt",
          "industry": "bollywood",
          "path": "http://4.bp.blogspot.com/-Bmxdef7Boxk/UoGugZ5V3UI/AAAAAAAAAQQ/7feYCn_fQHA/s1600/policegiri-2013-wallpapers.jpg"
        },
        {
          "celeb": "Sunil Shetty",
          "industry": "bollywood",
          "path": "http://wallpapers.filmibeat.com/ph-1024x768/2012/12/13548588727436.jpg"
        },
        {
          "celeb": "Deepika Padukone",
          "industry": "bollywood",
          "path": "http://wallpapers.filmibeat.com/ph-1024x768/2014/08/deepika-padukone_140905020330.jpg"
        },
        {
          "celeb": "Kajol",
          "industry": "bollywood",
          "path": "http://3.bp.blogspot.com/-KtYze2g6qR0/TVy11cJ7vhI/AAAAAAAAAVE/1P1tH1Ts640/s1600/K-2.jpg"
        },
        {
          "celeb": "Aamir Khan",
          "industry": "bollywood",
          "path": "http://ashemag.com/wp-content/uploads/2015/02/Amir-Khan-01.jpg"
        },
        {
          "celeb": "Ajay Devgan",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/56608-ajay-devgan-looking-worried.jpg"
        },
        {
          "celeb": "Asin",
          "industry": "bollywood",
          "path": "http://media1.santabanta.com/full1/Indian%20%20Celebrities(F)/Asin/asin-7a.jpg"
        },
        {
          "celeb": "Kareena Kapoor",
          "industry": "bollywood",
          "path": "http://www.contactphonenumberaddress.com/wp-content/uploads/2015/08/Kareena.jpg"
        },
        {
          "celeb": "Sohail Khan",
          "industry": "bollywood",
          "path": "http://www.images99.com/i99/04/116490/116490.jpg"
        },
        {
          "celeb": "Juhi Chawla",
          "industry": "bollywood",
          "path": "https://i.ytimg.com/vi/ESdfLGA0IiQ/maxresdefault.jpg"
        },
        {
          "celeb": "Johny Lever",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/12633-johny-lever-looking-very-angry.jpg"
        },
        {
          "celeb": "Sushmita Sen",
          "industry": "bollywood",
          "path": "http://media1.santabanta.com/full1/Indian%20%20Celebrities(F)/Sushmita%20Sen/sus42a.jpg"
        },
        {
          "celeb": "Parineeti Chopra",
          "industry": "bollywood",
          "path": "hhttp://www.timepassfun.com/wp-content/uploads/2014/11/parineet-chopra-beautiful-wallpaper.jpg"
        },
        {
          "celeb": "Ranbir Kapoor",
          "industry": "bollywood",
          "path": "http://wallpapershidef.com/wp-content/gallery/free-download-images-of-ranbir-kapoor/Ranbir-Kapoor-Wallpapers-0108.jpg"
        },
        {
          "celeb": "Priyanka Chopra",
          "industry": "bollywood",
          "path": "http://www.apnatimepass.com/priyanka-chopra-wallpaper-14.jpg"
        },
        {
          "celeb": "Kangana Ranaut",
          "industry": "bollywood",
          "path": "http://www.hollybollyhub.com/kangana-ranaut-hot.jpg"
        },
        {
          "celeb": "Sonam Kapoor",
          "industry": "bollywood",
          "path": "http://www.laughspark.info/uploadfiles/sonam-kapoor-beautiful-smile-635795958433203064-17169.jpg"
        },
        {
          "celeb": "Jimmy Shergil",
          "industry": "bollywood",
          "path": "http://3.bp.blogspot.com/-B2Iy4wI6gqQ/U4rUb6rfD8I/AAAAAAAAHVM/wAEOvhz0940/s1600/eeee.jpg"
        },
        {
          "celeb": "Govinda",
          "industry": "bollywood",
          "path": "http://marvelouswallpapers.com/wp-content/uploads/2013/12/old-govinda-hd-wallpapers.jpg"
        },
        {
          "celeb": "Rani Mukherjee",
          "industry": "bollywood",
          "path": "http://brit-asian.com/wp-content/uploads/2011/03/rani565656.jpg"
        },
        {
          "celeb": "Siddharth Malhotra",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/295029-siddharth-malhotra.jpg"
        },
        {
          "celeb": "Aishwarya Rai",
          "industry": "bollywood",
          "path": "https://meetchina.co/photos/celebrity/aishwarya-rai/action-replay-movie-aishwarya-rai-wallpapers-movies-3997fbabcbb8090be130a1ec92b108eb-image-125597.jpg"
        },
        {
          "celeb": "Preity Zinta",
          "industry": "bollywood",
          "path": "http://www.bollygraph.com/wp-content/uploads/2010/12/Preity_Zinta.jpg"
        },
        {
          "celeb": "Irrfan Khan",
          "industry": "bollywood",
          "path": "http://3.bp.blogspot.com/--PGZnOOmv2w/U3oYg9QZV_I/AAAAAAAAGPM/quTV0itJqkk/s1600/urlaaaa.jpg"
        },
        {
          "celeb": "Anil Kapoor",
          "industry": "bollywood",
          "path": "http://media.yah.in/uploads/images/org/anil_kapoor_styles_6764.jpg"
        },
        {
          "celeb": "Shilpa Shetty",
          "industry": "bollywood",
          "path": "http://www.hollybollyhub.com/shilpa-shetty-sizzling-image.jpg"
        },
        {
          "celeb": "Akshaye Khanna",
          "industry": "bollywood",
          "path": "http://www.bollywoodwizard.com/1024x768/akshaye_khanna_005_1024x768_ijvo.jpg"
        },
        {
          "celeb": "Emraan Hashmi",
          "industry": "bollywood",
          "path": "http://www.media.glamsham.com/download/wallpaper/celebrities/images/e/emraan-hashmi-wallpaper-30-10x7.jpg"
        },
        {
          "celeb": "Alia Bhatt",
          "industry": "bollywood",
          "path": "http://mrpopat.in/admin/upload/wallpaper/2015101714450610631035357123.jpg"
        },
        {
          "celeb": "Shraddha Kapoor",
          "industry": "bollywood",
          "path": "http://wallpapers.filmibeat.com/ph-1024x768/2015/07/shraddha-kapoor_143815254960.jpg"
        },
        {
          "celeb": "Sonakshi Sinha",
          "industry": "bollywood",
          "path": "http://www.download-free-wallpaper.com/img18/ugvzynniubclegmerfea.jpg"
        },
        {
          "celeb": "Bobby Deol",
          "industry": "bollywood",
          "path": "http://jilaa.net/images/Bobby-Deol-5255636635.jpg"
        },
        {
          "celeb": "Saif Ali Khan",
          "industry": "bollywood",
          "path": "http://o.aolcdn.com/hss/storage/adam/8332c2c55abd056ec3a19f504e2ed9eb/lak_1307_1024X768.jpg"
        },
        {
          "celeb": "Bipasha Basu",
          "industry": "bollywood",
          "path": "http://www.bollywoodwizard.com/1024x768/bipasha_basu_009_1024x768_tavw.jpg"
        },
        {
          "celeb": "John Abraham",
          "industry": "bollywood",
          "path": "http://1.bp.blogspot.com/-Ct_XU_iefe4/UNW4F9d9-CI/AAAAAAAAAoA/IhjjERfKqJw/s1600/John-Abraham-New-HD-Wallpaper-1.jpg"
        },
        {
          "celeb": "Uday Chopra",
          "industry": "bollywood",
          "path": "http://wallpapers.filmibeat.com/ph-1024x768/2012/12/13548565297561.jpg"
        },
        {
          "celeb": "Ameesha Patel",
          "industry": "bollywood",
          "path": "http://www.hotstarz.info/wp-content/uploads/2015/08/Ameesha-Patel-1.jpg"
        },
        {
          "celeb": "Arshad Warsi",
          "industry": "bollywood",
          "path": "http://www.indya101.com/wallpapers/Actors/Arshad_Warsi/2011/8/20/Arshad_Warsi_Wallpaper_vgjrt.jpg"
        },
        {
          "celeb": "Shahid Kapoor",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/160490-shahid-kapoor.jpg"
        },
        {
          "celeb": "Sonali Bendre",
          "industry": "bollywood",
          "path": "http://1.bp.blogspot.com/_-hkd0lYocCo/TAs2FlA53II/AAAAAAAAALs/FgFtF00DLiI/s1600/Sonali-1.jpg"
        },
        {
          "celeb": "Farhan Akhtar",
          "industry": "bollywood",
          "path": "http://img.india-forums.com/wallpapers/1024x768/134484-farhan-akhtar-at-zindagi-na-milegi-dobara-movie-first-look-laun.jpg"
        },
        {
          "celeb": "Katrina Kaif",
          "industry": "bollywood",
          "path": "http://www.hdwallpapers99.com/wp-content/uploads/2015/11/Katrina-Kaif-stills-3.jpg"
        }
      ];

      var shuffleArray = function(array) {
        var m = array.length, t, i;

        // While there remain elements to shuffle
        while (m) {
          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
          t = array[m];
          array[m] = array[i];
          array[i] = t;
        }

        return array;
      }

      shuffleArray($scope.images);

    }]);
