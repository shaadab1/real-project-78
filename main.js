var names=[
    "2.My Father(Abdul Sattar)",
    "3.My Mother(Shahnaz Bano)",
    "4.My Brother(Mohammed Sohel)",   
    "5.My brother(Abdul Samad)",
    "Me(Mohammed Shaadab)"
     
];

var images=[
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9f9784a1-dcaa-44bd-b17b-12f3185da944/d27tb6g-6fe2cb92-94ab-49be-8617-32a4e8b1fd10.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzlmOTc4NGExLWRjYWEtNDRiZC1iMTdiLTEyZjMxODVkYTk0NFwvZDI3dGI2Zy02ZmUyY2I5Mi05NGFiLTQ5YmUtODYxNy0zMmE0ZThiMWZkMTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.c3Gr-pEUrgZvALN2g5St5XCXiDQyyJkm6LM1UtmMnjE",
    "https://t4.ftcdn.net/jpg/02/84/66/33/360_F_284663321_jg59T2ccVwovZsEsLeGQ5W6T7MIongqN.jpg",
    "https://st4.depositphotos.com/23109214/27157/v/950/depositphotos_271572890-stock-illustration-cartoon-brothers-character-laughing-older.jpg",
    "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?size=626&ext=jpg",
    "https://i.pinimg.com/736x/77/d4/15/77d41520a3f07995b184797a3734bf44.jpg"
];

var i = 0;
            function update()
            {
                i++;
                var numbers_of_family_member_in_array = 5;
                if(i > numbers_of_family_member_in_array )
                {
                    i = 0;
                }
                var updatedImage = images[i];
                var updatedName  = names[i];
                document.getElementById("family_member_image").src = updatedImage;
                document.getElementById("family_member_name").innerHTML = updatedName;
            }