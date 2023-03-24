#!/bin/bash 

mkdir backend/app/data/ || true
mkdir backend/app/data/datasets/ || true
wget -O backend/app/data/datasets/participant_reference.csv "https://s771sas.storage.yandex.net/rdisk/416b04046aa707b78238bd1afaf1d7f84c33d63622f113227959fd4f18b24e9d/641e1e12/euv4Wlmga5CIwuJFtpYB3Ru5qb9ZxojYAa6TPZxCURofgCN3fakYRMvJkuKS3EMZfKO0YQaSTH4HVlhU39Y1dg==?uid=413006068&filename=%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%BE%D0%B2%20%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=945161&hid=9f0925fb04305782df4aaca39f65a994&media_type=spreadsheet&tknv=v2&etag=5bce4071157abad1baf2a9e9007c8d29&rtoken=xRub2usV99wM&force_default=yes&ycrid=na-163572951d733f49d74f9af354dc42ec-downloader19e&ts=5f7ac8e562880&s=b8222a0976046eb93dd2cbfc91df11c9905a2278d007138d6d6157986fe6c4e0&pb=U2FsdGVkX1_HDJ-wjir0XQN3C_W8AR4M26MtjRje60DLLy4VC45qCKTDZhtLXU-iFlb5JqbHgP6SIH8uTSCDTZBCJFtdITf6Na2ODYhimf0"
wget -O backend/app/data/datasets/product_reference.csv "https://s792sas.storage.yandex.net/rdisk/184a71928d68abe67b34635e73114efcf07eb32f02237a4b8b3bb2b9fa302f05/641e1e58/euv4Wlmga5CIwuJFtpYB3ZMGG6EDRbZMNBvKt762cUzCUJdJNPV8Ri9X8icsBn-tDfwm8H_f0fnX-KICuB1_IA==?uid=413006068&filename=%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%20%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%86%D0%B8%D0%B8.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=99139689&hid=1ad08af5d209f78d0a39eb3f7f5bf074&media_type=spreadsheet&tknv=v2&etag=ec6d57252a08b2e7102d398db3ef84a8&rtoken=zngGCtjxJr8l&force_default=yes&ycrid=na-063eb635e4cdcbd78875f36abdbb3ecd-downloader19e&ts=5f7ac92824600&s=d9bdbec2b3a1606bbff2b1e814b6529b70dfd93bde61282c6a7343f0e5a7f2ac&pb=U2FsdGVkX19ooI9f57jDrFH77lzUVrgzNcUPC0D6DwwUJbW-o4DhdwpScjMWtsdZ8jv07QXIMXWYfdTagYmJfmSfDtH8QtbHj_h8tZVeBtM"
wget -O backend/app/data/datasets/salepoint_reference.csv "https://s178vlx.storage.yandex.net/rdisk/55b6377de62b858dc6dd374d2ba4ea0c946aa8fe5f93dafe8387bbe6ca4c05ed/641e1e4a/euv4Wlmga5CIwuJFtpYB3Qe9g-lHZUss0Sqt5Ka4dnyjUj-7hwlShNIwrA1K5YA9Yvw4u_PMbga0zjdzfEeFUw==?uid=413006068&filename=%D0%A1%D0%BF%D1%80%D0%B0%D0%B2%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%20%D1%82%D0%BE%D1%80%D0%B3%D0%BE%D0%B2%D1%8B%D1%85%20%D1%82%D0%BE%D1%87%D0%B5%D0%BA.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=7323994&hid=6464741c72b4b393d4803951c80306e9&media_type=spreadsheet&tknv=v2&etag=23f108ecbc7cb042d98eec905dc5e41d&rtoken=blR0SsaaNJsH&force_default=yes&ycrid=na-3e3edb7ef6f6f759b9115ee4bd978099-downloader19e&ts=5f7ac91aca680&s=ac4515229ffa25eb7386a7300252888af463cf8d0072bf0a4118df488a86aec8&pb=U2FsdGVkX19bdBNWhJMmLYpM7N2wlGKCvY97mX__DNI6F85jvH67aBjMnI_jVA05a7Qk1tw-8WOmM3KTiiizs4I6FfPULIxvciY3kfP8zbI"

wget -O backend/app/data/datasets/product_input.csv "https://s192vlx.storage.yandex.net/rdisk/39bb7bc7650d8fcfdf4b3ed7ba3ee3aacb4c0057e8883193e6fe57fa615090a6/641e262b/euv4Wlmga5CIwuJFtpYB3ZKhnmscSQnY2aL5aCjybJo2w5aSCnHRQkR2qBFWacn_h2DUygLWdgoKF9drkURLow==?uid=413006068&filename=%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BE%20%D0%B2%D0%B2%D0%BE%D0%B4%D0%B5%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20%D0%B2%20%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%82%20%D1%81%202021-11-22%20%D0%BF%D0%BE%202022-11-21%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=328957&hid=8e869a4fad87b221224f12569b8b0a3c&media_type=spreadsheet&tknv=v2&etag=e398c3cb9fbf743931c906fac03eded8&rtoken=gB7xpwClEF4Q&force_default=yes&ycrid=na-f505a3f36df7b1e8a273f144c99ccb07-downloader12h&ts=5f7ad09e5a0c0&s=e1e41f127178ddcc3802fdcdd10b2a93340a2cd85e5a0c28953cd365c5b17680&pb=U2FsdGVkX18cwBhKAIuk36Co-SlmiCeCyKF-eKUeQqswz_lJ8EUx60XuuWmA08n3wf4tnFt0xRT_DIzXnlHZxoltdyf8mqtp_lnzceW0Is8"
wget -O backend/app/data/datasets/product_output.csv "https://s834sas.storage.yandex.net/rdisk/9d2716e05344ff1813cd5bdcc8f12b43250c4c3c46d93e0da3171f912400bce8/641e2484/euv4Wlmga5CIwuJFtpYB3XrHomFa1Zghue1S6iBO5WHmoJnffJu4vtZBF6llP5vz7xN_-e26MwSKJz8hK4dFvw==?uid=413006068&filename=%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BE%20%D0%B2%D1%8B%D0%B2%D0%BE%D0%B4%D0%B5%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20%D0%B8%D0%B7%20%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D1%82%D0%B0%20%D1%81%202021-11-22%20%D0%BF%D0%BE%202022-11-21%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=384875588&hid=7f3d3713840d05345cbd6f2f47b45222&media_type=spreadsheet&tknv=v2&etag=b5cc60288d29707b6d757d2445759f6d&rtoken=Ua7eZMPX7KPB&force_default=yes&ycrid=na-f2011bb4dc2aaaddcec0c0b7e6cf7f98-downloader24f&ts=5f7acf0af2900&s=85688ab9a6db12fc8154c9b1e0ab5af05ee494d492134209eb161a947e15edd2&pb=U2FsdGVkX19CChSR0GRS-CQ5Mp5iOFbeZduLXctT3Dp49J38GOJwm1AVFkddNMzvZRyuoA005Vcxbr9R1GKCG6LKLcyaXKr8nHS0rAgSj0k"
wget -O backend/app/data/datasets/product_movement.csv "https://s569sas.storage.yandex.net/rdisk/ce3a4fab6a3e440072cb7c761802f90f034a54630220ecb62075a5cbd0342fc9/641e1d40/euv4Wlmga5CIwuJFtpYB3UVFTBkXeUBEDACZVYze7bhM8r--RKPkD3Pz7aGeB932i69q7M0PS7xs-kjbHZlpZQ==?uid=413006068&filename=%D0%94%D0%B0%D0%BD%D0%BD%D1%8B%D0%B5%20%D0%BE%20%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%D1%85%20%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%D1%81%202021-11-22%20%D0%BF%D0%BE%202022-11-21%20%D0%BE%D0%B4%D0%B8%D0%BD%20%D0%BF%D1%80%D0%BE%D0%B8%D0%B7%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C.csv&disposition=attachment&hash=&limit=0&content_type=text%2Fplain&owner_uid=413006068&fsize=51499420&hid=56333f960d06139ebd8b8e61240a6fc3&media_type=spreadsheet&tknv=v2&etag=1c3163242f16caa1e58575bb42d8e9ef&rtoken=16GImGDOmbbL&force_default=yes&ycrid=na-cf725beddcad56bf55906e5073a61f2c-downloader19e&ts=5f7ac81d1d000&s=94119c009802840a82514a3e9029f1945f873977bc181dc2f34a8da9dc9ebdc0&pb=U2FsdGVkX19576uXuZPYIkE1tcS9QHskR-1Ro92RM3B4zFUvED872Sh52Wlhx3xD-D4x2AAi-IQE2uEX12XBIkSkTOXIYieZZ-yiV-PaNaQ"
