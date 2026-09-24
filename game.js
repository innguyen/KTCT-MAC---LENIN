const rounds = [
  { law:'GIÁ TRỊ', title:'Mẻ bánh đầu tiên', symbol:'₫', category:'SẢN XUẤT & HÀNG HÓA', principle:'Muốn hiểu quy luật giá trị, hãy nhìn vào lao động cần thiết để làm ra hàng hóa. Người sản xuất có chi phí cá biệt thấp hơn mặt bằng xã hội thường có lợi thế.', scene:'Hai lò bánh cùng bán bánh mì ở khu chợ. Lò của cô Mai làm bánh ngon nhưng tốn nhiều than và mất gần gấp đôi thời gian. Khách hàng đang so giá giữa hai sạp.', choices:[
    {text:'Đầu tư lò nướng tiết kiệm năng lượng', sub:'Tốn vốn ban đầu, giảm hao phí cho mỗi mẻ bánh.', effects:{production:12,prices:-2,welfare:5}, result:'Sau vài phiên, lò mới giúp cô Mai làm nhiều bánh hơn với cùng lượng nhiên liệu. Giá bán vẫn theo mặt bằng khu chợ, nên khoản tiết kiệm trở thành lợi thế.', lesson:'Quy luật giá trị yêu cầu sản xuất dựa trên hao phí lao động xã hội cần thiết. Hạ hao phí cá biệt bằng cải tiến kỹ thuật giúp người sản xuất có lợi thế và khuyến khích lực lượng sản xuất phát triển.'},
    {text:'Giữ cách làm cũ, tăng giá để bù chi phí', sub:'Không cần đầu tư, nhưng khách có thể chọn sạp khác.', effects:{production:-8,prices:9,welfare:-5}, result:'Chi phí cao khiến giá bánh của cô Mai nhỉnh hơn các sạp bên cạnh. Một số khách chuyển sang mua nơi khác, lượng hàng bán ra giảm.', lesson:'Nếu hao phí cá biệt cao hơn mức xã hội chấp nhận, người sản xuất dễ mất lợi thế. Giá cả thị trường truyền tín hiệu về chi phí và nhu cầu.'},
    {text:'Giảm khẩu phần để bán rẻ hơn', sub:'Giá thấp hơn, nhưng khách nhận ít bánh hơn.', effects:{production:4,prices:-5,welfare:-2}, result:'Giá trên mỗi ổ giảm, song khách nhận ra khẩu phần nhỏ đi. Sạp bán thêm được vài lượt nhưng niềm tin của khách giảm.', lesson:'Cạnh tranh bằng giá có thể đem lại lợi thế trước mắt, nhưng giá trị và chất lượng hàng hóa vẫn gắn với lao động, nguyên liệu và nhu cầu thực tế.'}
  ]},
  { law:'GIÁ TRỊ', title:'Người thợ mới vào nghề', symbol:'₫', category:'NĂNG SUẤT LAO ĐỘNG', principle:'Khi trao đổi dựa trên giá trị xã hội, năng suất và trình độ lao động tạo ra khác biệt giữa những người sản xuất.', scene:'Hợp tác xã gốm nhận đơn hàng lớn. Người thợ lành nghề hoàn thành một chiếc bình trong một giờ; người mới học cần ba giờ và thường phải sửa lại sản phẩm.', choices:[
    {text:'Mở lớp kèm nghề và chuẩn hóa quy trình', sub:'Năng suất tăng dần, người mới có cơ hội tiến bộ.', effects:{production:10,prices:-2,welfare:8}, result:'Sau thời gian học việc, tỷ lệ sản phẩm lỗi giảm. Tổ gốm giao đơn đều hơn, người thợ mới có tay nghề và thu nhập ổn định.', lesson:'Quy luật giá trị kích thích cải tiến kỹ thuật, tổ chức sản xuất và nâng cao năng suất lao động. Phân hóa có thể xuất hiện, nên cơ hội học nghề giúp người lao động thích ứng.'},
    {text:'Chỉ giao đơn gấp cho thợ lành nghề', sub:'Đảm bảo chất lượng ngay, người mới tiếp tục chậm.', effects:{production:5,prices:2,welfare:-8}, result:'Lô hàng kịp hạn nhưng vài người thợ phải làm thêm giờ. Người mới không có cơ hội rèn kỹ năng nên khoảng cách năng suất vẫn còn.', lesson:'Chủ thể có năng suất cao dễ tích lũy lợi thế; người sản xuất kém hiệu quả có thể bị tụt lại. Đây là một mặt phân hóa do quy luật giá trị.'},
    {text:'Chia đều số đơn và trả công bất kể năng suất', sub:'Mọi người nhận phần việc bằng nhau.', effects:{production:-7,prices:4,welfare:3}, result:'Không còn động lực nhận thêm việc khó. Đơn hàng chậm, còn người thợ giỏi thấy đóng góp của mình chưa được ghi nhận.', lesson:'Phân phối cần gắn với đóng góp và hiệu quả, đồng thời phải quan tâm đến điều kiện để người lao động nâng cao năng lực.'}
  ]},
  { law:'CUNG – CẦU', title:'Vụ mùa bội thu', symbol:'⇄', category:'GIÁ CẢ THỊ TRƯỜNG', principle:'Giá cả biến động dưới tác động qua lại của cung và cầu. Cung vượt cầu thường gây áp lực giảm giá; cầu vượt cung thường gây áp lực tăng giá.', scene:'Một vụ dưa hấu được mùa. Xe chở dưa từ nhiều xã cùng đến chợ, nhưng lượng khách mua không tăng tương ứng. Dưa tươi cần bán nhanh trước khi hỏng.', choices:[
    {text:'Kết nối bếp ăn và điểm bán ở khu vực lân cận', sub:'Tìm thêm người mua để hấp thụ lượng hàng dư.', effects:{production:5,prices:1,welfare:12}, result:'Đơn hàng của bếp ăn và điểm bán mới giúp dưa đến tay thêm nhiều người. Giá bớt giảm sâu, người trồng bán được phần lớn sản lượng.', lesson:'Khi cung lớn hơn cầu, giá có xu hướng giảm và người sản xuất có thể thu hẹp quy mô. Trung gian thương mại và thông tin thị trường giúp kết nối cung với cầu.'},
    {text:'Giữ nguyên giá cao, chờ khách quay lại', sub:'Không giảm doanh thu mỗi quả, nhưng hàng dễ tồn.', effects:{production:-9,prices:8,welfare:-7}, result:'Nhiều xe dưa còn lại đến chiều. Một phần hàng hỏng, người trồng chịu chi phí vận chuyển và giá ngoài chợ vẫn giảm.', lesson:'Khi cung vượt cầu, cố giữ giá cao không tự tạo thêm người mua. Giá thị trường phát tín hiệu để điều chỉnh sản xuất và lưu thông.'},
    {text:'Đổ bỏ phần dưa dư để giữ giá', sub:'Lượng hàng bán ra ít đi, người mua chịu thiệt.', effects:{production:-8,prices:10,welfare:-12}, result:'Nguồn cung giảm tạm thời nhưng thực phẩm bị lãng phí. Người mua bức xúc khi thấy hàng bị bỏ đi trong lúc giá còn cao.', lesson:'Cơ chế thị trường có thể dẫn đến lãng phí nguồn lực khi các quyết định riêng không tính đủ lợi ích xã hội.'}
  ]},
  { law:'CUNG – CẦU', title:'Cơn sốt áo mưa', symbol:'⇄', category:'THIẾU HỤT HÀNG HÓA', principle:'Cầu vượt cung tạo áp lực tăng giá; tín hiệu này có thể khiến người sản xuất mở rộng quy mô. Nhà nước có thể dùng công cụ vĩ mô để hạn chế biến động gây hại.', scene:'Mưa lớn kéo dài, áo mưa ở các sạp trong chợ gần như bán hết. Một số người gom hàng để bán lại với giá gấp ba. Người đi làm vẫn cần áo mưa.', choices:[
    {text:'Đưa hàng dự trữ ra bán, công khai giá', sub:'Tăng lượng hàng và giúp người mua biết giá hợp lý.', effects:{production:8,prices:-9,welfare:10}, result:'Lượng áo mưa bán ra tăng, những người gom hàng khó giữ giá quá cao. Chợ ổn định dần trong khi các sạp gọi thêm hàng.', lesson:'Khi cầu vượt cung, giá có xu hướng tăng. Dự trữ và thông tin minh bạch là công cụ có thể hỗ trợ cân đối cung cầu và hạn chế đầu cơ.'},
    {text:'Để giá tăng hoàn toàn theo cơn sốt', sub:'Tạo động lực nhập thêm hàng, nhưng nhiều người không mua nổi.', effects:{production:9,prices:13,welfare:-9}, result:'Các sạp tìm cách nhập thêm áo mưa, nhưng người thu nhập thấp phải đi mưa hoặc mua hàng với giá rất cao.', lesson:'Tín hiệu giá có thể khuyến khích tăng cung, nhưng cơ chế thị trường tự nó không bảo đảm khả năng tiếp cận bình đẳng của mọi người.'},
    {text:'Ấn định giá rất thấp và cấm bán thêm', sub:'Người mua vui trước mắt, người bán giảm nhập hàng.', effects:{production:-10,prices:-4,welfare:-4}, result:'Giá niêm yết thấp nhưng hàng nhanh chóng hết sạch. Các sạp ngại nhập thêm nếu phải bán dưới chi phí.', lesson:'Can thiệp giá cần cân nhắc phản ứng cung cầu. Nếu giá bị giữ thấp hơn chi phí trong thời gian dài, nguồn cung có thể giảm và thiếu hụt nặng hơn.'}
  ]},
  { law:'LƯU THÔNG TIỀN TỆ', title:'Quầy hàng và túi tiền', symbol:'◉', category:'LƯU THÔNG TIỀN TỆ', principle:'Lượng tiền cần thiết phụ thuộc vào giá cả, khối lượng hàng hóa lưu thông và tốc độ quay vòng của tiền: M = (P × Q) / V.', scene:'Ngân hàng địa phương dự định hỗ trợ thanh toán mùa lễ hội. Năm nay lượng hàng gần như không đổi, nhưng nhiều cửa hàng đã chấp nhận thanh toán số tức thời.', choices:[
    {text:'Ước tính nhu cầu tiền theo lượng hàng và tốc độ lưu thông', sub:'Theo dõi giao dịch, điều chỉnh hỗ trợ theo dữ liệu.', effects:{production:4,prices:-2,welfare:7}, result:'Nhu cầu thanh toán được đáp ứng mà không đẩy lượng tiền tăng quá nhanh. Cửa hàng nhận tiền thuận tiện hơn, người mua dễ theo dõi chi tiêu.', lesson:'M = (P × Q) / V: lượng tiền cần thiết tỷ lệ thuận với tổng giá cả và tỷ lệ nghịch với tốc độ lưu thông. Thanh toán nhanh làm V tăng, tác động đến lượng tiền cần dùng.'},
    {text:'Phát hành tiền hỗ trợ thật nhiều cho mọi sạp', sub:'Vốn đến nhanh, nhưng lượng hàng không tăng ngay.', effects:{production:4,prices:13,welfare:-4}, result:'Sức mua tăng trong khi lượng hàng chưa kịp đổi. Một số mặt hàng bắt đầu tăng giá, sức mua của số tiền mới giảm.', lesson:'Đưa quá nhiều tiền vào lưu thông so với nhu cầu hàng hóa có thể gây áp lực lạm phát. Chính sách tiền tệ cần tính đến P, Q và V.'},
    {text:'Ngừng toàn bộ hỗ trợ thanh toán', sub:'Giữ tiền mặt ổn định, giao dịch trở nên chậm hơn.', effects:{production:-8,prices:-3,welfare:-5}, result:'Một số hộ kinh doanh nhỏ thiếu phương tiện thanh toán và bỏ lỡ khách. Giao dịch chậm lại dù lượng hàng vẫn có.', lesson:'Điều tiết tiền tệ cần phù hợp với nhu cầu giao dịch thực tế. Thiếu phương tiện thanh toán cũng có thể cản trở lưu thông hàng hóa.'}
  ]},
  { law:'LƯU THÔNG TIỀN TỆ', title:'Đồng tiền chạy nhanh hơn', symbol:'◉', category:'THANH TOÁN & GIÁ CẢ', principle:'Khi tốc độ lưu thông tiền thay đổi, lượng tiền cần thiết cũng thay đổi. Nắm đúng mối quan hệ này giúp giải thích áp lực giá cả.', scene:'Chợ chuyển sang ví điện tử, thanh toán diễn ra nhanh hơn và cùng một khoản tiền được dùng qua nhiều lượt mua bán trong ngày. Một số quầy lại dựa vào doanh số tăng để vay thêm, nhập hàng vượt nhu cầu.', choices:[
    {text:'Theo dõi giá cả và tốc độ giao dịch trước khi nới tín dụng', sub:'Dựa vào dữ liệu để điều chỉnh lượng vốn.', effects:{production:4,prices:-3,welfare:6}, result:'Các cửa hàng tiếp cận vốn theo nhu cầu thật. Giao dịch số thuận tiện nhưng việc vay nhập hàng vẫn được cân nhắc.', lesson:'Lượng tiền cần thiết tỷ lệ nghịch với tốc độ lưu thông V trong mô hình M = (P × Q) / V. Công nghệ thanh toán thay đổi V, nên cần theo dõi biến động thực tế.'},
    {text:'Cấp tín dụng tối đa cho mọi cửa hàng', sub:'Bán thêm được nhiều ngay, nguy cơ tồn kho tăng.', effects:{production:10,prices:9,welfare:-3}, result:'Nhiều quầy nhập hàng cùng lúc. Doanh số ban đầu tăng nhưng hàng tồn và áp lực trả nợ xuất hiện khi nhu cầu không theo kịp.', lesson:'Tín dụng có thể thúc đẩy sản xuất, song cần gắn với nhu cầu hàng hóa. Lượng tiền và hàng hóa mất cân đối có thể làm tăng giá hoặc rủi ro.'},
    {text:'Hạn chế mọi giao dịch số để tiền quay chậm lại', sub:'Khó phát sinh giao dịch quá nhanh, người mua mất tiện lợi.', effects:{production:-9,prices:-2,welfare:-7}, result:'Một số giao dịch chậm hoặc không thực hiện được. Người bán mất khách dù hàng hóa và nhu cầu vẫn còn.', lesson:'Tốc độ lưu thông tiền là một yếu tố của lượng tiền cần thiết, nhưng hạn chế giao dịch không tự giải quyết được mất cân đối cung cầu.'}
  ]},
  { law:'CẠNH TRANH', title:'Sạp hàng kế bên', symbol:'⚖', category:'CẠNH TRANH TRONG NGÀNH', principle:'Cạnh tranh giữa các chủ thể có thể thúc đẩy cải tiến kỹ thuật, hạ chi phí và nâng chất lượng. Cạnh tranh không lành mạnh gây tổn hại cho thị trường.', scene:'Một sạp trái cây mới xuất hiện ngay cạnh quầy của bạn. Chủ sạp kia có giá thấp hơn, giao hàng tận nơi và công khai nguồn gốc. Khách quen bắt đầu so sánh.', choices:[
    {text:'Cải thiện bảo quản và giao hàng tận nơi', sub:'Đổi mới dịch vụ để tạo giá trị cho người mua.', effects:{production:9,prices:-1,welfare:8}, result:'Bạn giảm phần hàng hỏng và nhiều khách quay lại nhờ dịch vụ thuận tiện. Hai sạp cạnh tranh bằng chất lượng và cách phục vụ.', lesson:'Cạnh tranh trong nội bộ ngành kích thích đổi mới kỹ thuật và tổ chức sản xuất để giảm chi phí, đáp ứng tốt hơn nhu cầu người tiêu dùng.'},
    {text:'Bán dưới giá vốn cho đến khi đối thủ rời chợ', sub:'Có thể hút khách nhanh, nhưng sạp của bạn cũng lỗ.', effects:{production:-6,prices:-8,welfare:-4}, result:'Khách mua rẻ một thời gian, nhưng cả hai sạp đều khó duy trì. Khi một bên đóng cửa, lựa chọn của người mua ít đi.', lesson:'Cạnh tranh thiếu lành mạnh hoặc bán phá giá kéo dài có thể làm tổn hại môi trường kinh doanh và lãng phí nguồn lực.'},
    {text:'Tung tin xấu về nguồn gốc hàng của đối thủ', sub:'Có thể làm khách dao động nhưng phá vỡ lòng tin.', effects:{production:-8,prices:4,welfare:-10}, result:'Tin đồn lan khắp chợ, khách hàng nghi ngờ cả hai quầy. Ban quản lý yêu cầu kiểm tra thông tin và xử lý hành vi sai lệch.', lesson:'Cạnh tranh cần diễn ra lành mạnh. Gian lận và thông tin sai lệch gây tổn hại người tiêu dùng, doanh nghiệp và cộng đồng.'}
  ]},
  { law:'CẠNH TRANH', title:'Chọn ngành hay giữ nghề?', symbol:'⚖', category:'CẠNH TRANH GIỮA CÁC NGÀNH', principle:'Nguồn lực có thể dịch chuyển giữa các ngành khi chủ thể tìm kiếm cơ hội sinh lợi. Sự dịch chuyển này giúp phân bổ nguồn lực nhưng cũng cần tính đến hệ quả xã hội.', scene:'Trong chợ, nghề sửa nông cụ có lợi nhuận thấp hơn các sạp đồ điện tử đang rất đông khách. Nhiều người định bỏ nghề sửa chữa dù nông dân quanh vùng vẫn cần dịch vụ này.', choices:[
    {text:'Đào tạo thêm thợ và hỗ trợ công cụ sửa chữa', sub:'Giữ dịch vụ thiết yếu, cải thiện hiệu suất nghề.', effects:{production:7,prices:1,welfare:10}, result:'Thợ sửa chữa nhận máy móc mới và đào tạo kỹ năng. Thời gian chờ giảm, nông dân giữ được công cụ làm việc.', lesson:'Cạnh tranh giữa các ngành thúc đẩy dịch chuyển nguồn lực theo khả năng sinh lợi. Tuy nhiên, ngành lợi nhuận thấp nhưng cần thiết có thể cần chính sách hỗ trợ phù hợp.'},
    {text:'Chuyển toàn bộ thợ sang bán đồ điện tử', sub:'Lợi nhuận trước mắt cao, dịch vụ sửa chữa biến mất.', effects:{production:8,prices:4,welfare:-12}, result:'Doanh thu chợ tăng trong vài tuần nhưng nông dân phải đi xa sửa nông cụ. Chi phí và thời gian sản xuất của họ tăng.', lesson:'Tín hiệu lợi nhuận ảnh hưởng việc phân bổ nguồn lực, nhưng lợi ích riêng không luôn trùng với nhu cầu chung của xã hội.'},
    {text:'Cấm mọi sạp mở bán đồ điện tử', sub:'Giữ thợ sửa chữa nhưng ngăn cản ngành mới phát triển.', effects:{production:-9,prices:3,welfare:-6}, result:'Dịch vụ sửa chữa còn đó, nhưng khách chợ không tiếp cận được mặt hàng mới và người kinh doanh mất cơ hội đầu tư.', lesson:'Điều tiết cần xử lý hệ quả thị trường mà vẫn tạo điều kiện cho sáng kiến và cạnh tranh phát triển.'}
  ]}
];

// Mỗi chương có ba tình huống. Bốn tình huống bổ sung mở rộng cơ chế từ tài liệu bài học.
rounds.splice(2, 0, {
  law:'GIÁ TRỊ', title:'Giá của một chiếc áo', symbol:'₫', category:'GIÁ TRỊ & GIÁ CẢ', principle:'Giá cả là biểu hiện bằng tiền của giá trị và dao động quanh giá trị xã hội dưới tác động cung cầu.',
  scene:'Áo vải thủ công của làng cần nhiều giờ may hơn áo sản xuất bằng máy. Người thợ đề nghị giữ nguyên mọi công đoạn nhưng bán gấp đôi giá thị trường, dù khách hàng chủ yếu cần áo mặc hằng ngày.',
  choices:[
    {text:'Đổi mới công đoạn, giữ chất lượng cần thiết',sub:'Giảm thời gian may mà vẫn đáp ứng nhu cầu.',effects:{production:9,prices:-3,welfare:5},result:'Xưởng sắp xếp lại công việc và sử dụng dụng cụ mới. Thời gian làm mỗi áo giảm, giá bán gần hơn với thị trường.',lesson:'Quy luật giá trị khuyến khích hạ hao phí lao động cá biệt. Người sản xuất cần chú ý mức hao phí xã hội cần thiết và nhu cầu thực tế.'},
    {text:'Tăng giá gấp đôi và giữ mọi khâu như cũ',sub:'Giá cao bù chi phí, nhưng có thể mất khách.',effects:{production:-7,prices:10,welfare:-5},result:'Một số khách thích sản phẩm thủ công, nhưng đa số chuyển sang áo rẻ hơn. Sản lượng bán ra giảm.',lesson:'Giá cả vận động quanh giá trị xã hội và chịu tác động cung cầu; hao phí cá biệt cao không bảo đảm người mua chấp nhận giá cao.'},
    {text:'Bỏ kiểm tra chất lượng để giảm chi phí',sub:'Làm nhanh hơn nhưng rủi ro sản phẩm lỗi.',effects:{production:5,prices:-4,welfare:-8},result:'Nhiều áo bán ra trong tuần đầu, rồi khách quay lại phàn nàn vì đường may dễ rách.',lesson:'Giảm chi phí cần đi cùng chất lượng và lợi ích người tiêu dùng. Quy luật giá trị không khuyến khích gian lận chất lượng.'}
  ]
});
rounds.splice(5, 0, {
  law:'CUNG – CẦU', title:'Ai nắm thông tin giá?', symbol:'⇄', category:'THỊ TRƯỜNG & CHỦ THỂ TRUNG GIAN', principle:'Thông tin và chủ thể trung gian giúp nối người sản xuất với người tiêu dùng, nhưng đầu cơ có thể làm méo tín hiệu thị trường.',
  scene:'Nông dân vùng xa bán cà phê qua một đầu mối. Đầu mối này biết giá thị trường đang tăng nhưng thông báo giá cũ, khiến người trồng không nhận được phần lợi ích tương ứng.',
  choices:[
    {text:'Công khai bảng giá và mở thêm kênh giao dịch',sub:'Người bán lẫn người mua có thêm thông tin.',effects:{production:6,prices:-2,welfare:9},result:'Nông dân so sánh được nhiều báo giá; các đầu mối phải cạnh tranh minh bạch hơn.',lesson:'Chủ thể trung gian có ích khi kết nối cung cầu và trao đổi thông tin. Minh bạch giá giúp thị trường hoạt động hiệu quả hơn.'},
    {text:'Giữ độc quyền đầu mối để giao dịch nhanh',sub:'Ít thủ tục, nhưng nông dân phụ thuộc một bên.',effects:{production:2,prices:7,welfare:-9},result:'Hàng vẫn được bán nhanh nhưng chênh lệch giá giữa nơi trồng và nơi mua tiếp tục lớn.',lesson:'Khi thông tin bất cân xứng và cạnh tranh bị hạn chế, một chủ thể có thể hưởng lợi bất cân đối; điều này cần sự giám sát phù hợp.'},
    {text:'Loại bỏ mọi trung gian trong một ngày',sub:'Mỗi hộ phải tự tìm khách và tự vận chuyển.',effects:{production:-7,prices:3,welfare:-3},result:'Một số hộ bán trực tiếp tốt, nhiều hộ khác không có kho bãi hoặc khách mua nên hàng bị tồn.',lesson:'Trung gian không tự thân là xấu. Vai trò của họ là nối sản xuất với tiêu dùng; cần loại bỏ gian lận, chứ không bỏ chức năng kết nối.'}
  ]
});
rounds.splice(8, 0, {
  law:'LƯU THÔNG TIỀN TỆ', title:'Bài toán quỹ tiền', symbol:'◉', category:'TÍNH LƯỢNG TIỀN CẦN THIẾT', principle:'Trong mô hình đơn giản của tài liệu, M = (P × Q) / V.',
  scene:'Giả sử giá bình quân P = 10 xu, có Q = 100 món hàng được giao dịch và mỗi đồng tiền quay V = 5 vòng. Hội đồng chợ cần ước tính M, lượng tiền cần thiết để lưu thông số hàng này.',
  choices:[
    {text:'Chuẩn bị khoảng 200 xu',sub:'Lấy tổng giá hàng hóa chia cho số vòng quay.',effects:{production:3,prices:-3,welfare:6},result:'Quỹ tiền đáp ứng phần lớn giao dịch theo giả định của bài toán, không tạo chênh lệch quá lớn.',lesson:'M = (10 × 100) / 5 = 200 xu. Công thức là mô hình học tập; thực tế còn có nhiều yếu tố và điều kiện khác.'},
    {text:'Chuẩn bị 1.000 xu',sub:'Bỏ qua tốc độ quay vòng của tiền.',effects:{production:4,prices:11,welfare:-5},result:'Lượng tiền đưa ra lớn hơn mức bài toán gợi ý, trong khi lượng hàng không tăng tương ứng. Giá có áp lực tăng.',lesson:'V nằm ở mẫu số trong M = (P × Q) / V. Bỏ qua vòng quay tiền có thể dẫn tới ước tính lượng tiền cần thiết quá cao.'},
    {text:'Chỉ chuẩn bị 50 xu',sub:'Ít tiền hơn nhiều so với lượng giao dịch cần hỗ trợ.',effects:{production:-8,prices:-2,welfare:-6},result:'Nhiều giao dịch phải chờ hoặc mua chịu vì thiếu phương tiện thanh toán.',lesson:'Lượng tiền thấp hơn nhu cầu lưu thông có thể cản trở trao đổi hàng hóa. Cần tính cả P, Q và V.'}
  ]
});
rounds.splice(11, 0, {
  law:'CẠNH TRANH', title:'Nền tảng độc quyền', symbol:'⚖', category:'CẠNH TRANH & NHÀ NƯỚC', principle:'Cạnh tranh cần môi trường pháp lý phù hợp. Nhà nước có vai trò khắc phục khuyết tật thị trường và bảo vệ các chủ thể.',
  scene:'Một ứng dụng giao hàng đang kiểm soát gần hết đơn ở chợ. Nền tảng yêu cầu các sạp không được bán ở ứng dụng khác và tăng phí đột ngột, khiến người bán nhỏ gặp khó.',
  choices:[
    {text:'Bỏ điều khoản độc quyền, công khai phí',sub:'Giữ dịch vụ số và khôi phục lựa chọn cho sạp.',effects:{production:6,prices:-4,welfare:10},result:'Các sạp có thể chọn kênh phù hợp. Nền tảng vẫn phục vụ khách nhưng phải cải thiện dịch vụ để cạnh tranh.',lesson:'Nhà nước có thể dùng pháp luật để bảo vệ cạnh tranh lành mạnh, tạo môi trường cho các chủ thể phát huy sáng tạo.'},
    {text:'Để nền tảng tự quyết mọi điều kiện',sub:'Giao dịch vẫn nhanh nhưng bên nhỏ mất sức mặc cả.',effects:{production:3,prices:10,welfare:-10},result:'Phí giao hàng được chuyển vào giá bán. Một số sạp nhỏ rời nền tảng vì không đủ lợi nhuận.',lesson:'Cạnh tranh thiếu lành mạnh hoặc vị thế độc quyền có thể gây hại cho người bán và người tiêu dùng; thị trường không tự khắc phục mọi khuyết tật.'},
    {text:'Cấm toàn bộ nền tảng giao hàng',sub:'Ngăn độc quyền nhanh, mất luôn kênh kết nối mới.',effects:{production:-9,prices:3,welfare:-5},result:'Phí độc quyền biến mất nhưng nhiều khách ở xa không mua được hàng từ chợ.',lesson:'Điều tiết cần xử lý hành vi gây hại, đồng thời giữ cơ hội đổi mới và vai trò kết nối của chủ thể trung gian.'}
  ]
});

const baseStats = { production:50, prices:50, welfare:50 };
const baseEconomy = { supply:50, demand:50, money:50, velocity:50 };
const projects = [
  { id:'tools', icon:'⚒', name:'Xưởng cải tiến', cost:22, detail:'Sản xuất +8; mỗi lượt thêm 2 hàng hóa.', gain:{production:8,supply:5}, perTurn:{supply:2} },
  { id:'storage', icon:'▤', name:'Kho bảo quản', cost:19, detail:'Hàng hóa +8; mỗi lượt giữ thêm 2 hàng.', gain:{supply:8,welfare:2}, perTurn:{supply:2} },
  { id:'training', icon:'◈', name:'Lớp học nghề', cost:17, detail:'Sản xuất +5, đời sống +4; thêm 1 sản xuất/lượt.', gain:{production:5,welfare:4}, perTurn:{production:1} },
  { id:'prices', icon:'◎', name:'Bảng giá công khai', cost:14, detail:'Đời sống +5; giảm biến động giá các lượt sau.', gain:{welfare:5}, perTurn:{stability:1} },
  { id:'payments', icon:'◉', name:'Thanh toán số', cost:18, detail:'Vòng quay tiền +8; thêm 1 vòng quay/lượt.', gain:{velocity:8,welfare:2}, perTurn:{velocity:1} },
  { id:'reserve', icon:'▣', name:'Quỹ dự trữ', cost:21, detail:'Hàng hóa +6; giá bớt biến động khi thiếu hàng.', gain:{supply:6}, perTurn:{stability:1} },
  { id:'cleanup', icon:'♻', name:'Thu gom chất thải', cost:19, detail:'Đời sống +7; giảm tác động môi trường khi sản xuất tăng.', gain:{welfare:7}, perTurn:{welfare:1} }
];
const chapterInfo = [
  { title:'Làng nghề mở chợ', body:'Từ sản xuất tự túc, hàng hóa được mang ra trao đổi. Bạn giúp những người sản xuất học cách thích ứng với hao phí lao động xã hội cần thiết.', goal:'Sau 3 hồ sơ, đưa chỉ số sản xuất đạt ít nhất 52.', check:()=>stats.production>=52 },
  { title:'Chợ gặp biến động', body:'Cung và cầu không ngừng thay đổi. Giá cả trở thành tín hiệu, còn người bán, người mua và trung gian đều phản ứng theo lợi ích riêng.', goal:'Sau 6 hồ sơ, giữ chỉ số giá cả trong khoảng 30–70.', check:()=>stats.prices>=30&&stats.prices<=70 },
  { title:'Đồng tiền lưu chuyển', body:'Khi hoạt động mua bán tăng, câu hỏi không chỉ là có bao nhiêu hàng mà còn là cần bao nhiêu tiền để thanh toán.', goal:'Sau 9 hồ sơ, giữ lượng tiền lưu thông trong khoảng 35–70.', check:()=>economy.money>=35&&economy.money<=70 },
  { title:'Cạnh tranh định hình tương lai', body:'Cạnh tranh có thể nâng năng suất và phục vụ người mua tốt hơn. Nhưng gian lận, độc quyền và môi trường bị tổn hại cần được nhận diện.', goal:'Sau 12 hồ sơ, giữ đời sống đạt ít nhất 55.', check:()=>stats.welfare>=55 }
];
const $ = id => document.getElementById(id);
const clamp = value => Math.max(0, Math.min(100, Math.round(value)));
const ruleData = {
  'GIÁ TRỊ': { title:'QUY LUẬT GIÁ TRỊ', principle:'Sản xuất và trao đổi hàng hóa dựa trên hao phí lao động xã hội cần thiết. Năng suất giúp tạo lợi thế, đồng thời có thể làm phân hóa người sản xuất.', symbol:'₫' },
  'CUNG – CẦU': { title:'QUY LUẬT CUNG – CẦU', principle:'Cung và cầu tác động lẫn nhau, ảnh hưởng trực tiếp đến giá cả. Giá phát tín hiệu để các chủ thể điều chỉnh sản xuất và tiêu dùng.', symbol:'⇄' },
  'LƯU THÔNG TIỀN TỆ': { title:'QUY LUẬT LƯU THÔNG TIỀN TỆ', principle:'Lượng tiền cần thiết phụ thuộc tổng giá hàng hóa và tốc độ lưu thông. Mô hình đơn giản: M = (P × Q) / V.', symbol:'◉' },
  'CẠNH TRANH': { title:'QUY LUẬT CẠNH TRANH', principle:'Cạnh tranh có thể thúc đẩy đổi mới và phân bổ nguồn lực; hành vi thiếu lành mạnh gây tổn hại thị trường và cộng đồng.', symbol:'⚖' }
};
let stats={...baseStats}, economy={...baseEconomy}, treasury=48, roundIndex=0, history=[], levels={}, medals=[], invested=false, locked=false, resolvedChoice=null, soundOn=false;
let gamePhase='intro';

function saveGame() {
  try { localStorage.setItem('phien-cho-save-v2', JSON.stringify({stats,economy,treasury,roundIndex,history,levels,medals,invested,resolvedChoice,gamePhase})); } catch {}
}
function readSave() {
  try { const saved=JSON.parse(localStorage.getItem('phien-cho-save-v2')); return saved && saved.roundIndex>=0 && saved.roundIndex<rounds.length ? saved : null; } catch { return null; }
}
function renderCampaign() {
  const track=$('chapter-track'); track.replaceChildren();
  chapterInfo.forEach((chapter,index)=>{
    const box=document.createElement('div'); box.className='chapter-step'+(Math.floor(roundIndex/3)===index?' active':'')+(index<medals.length?' complete':'');
    const number=document.createElement('span'); number.textContent=`0${index+1}`;
    const title=document.createElement('strong'); title.textContent=chapter.title;
    const status=document.createElement('small'); status.textContent=index<medals.length?(medals[index]?'★ HOÀN THÀNH':'◇ CẦN CẢI THIỆN'):index===Math.floor(roundIndex/3)?'ĐANG DIỄN RA':'CHƯA MỞ';
    box.append(number,title,status); track.append(box);
  });
  $('campaign-progress').textContent=`${history.length} / ${rounds.length} HỒ SƠ`;
}
function renderEconomy() {
  for (const key of Object.keys(economy)) $(key+'-value').textContent=economy[key];
  $('treasury-label').textContent=`NGÂN QUỸ: ${treasury} XU`;
  $('investment-count').textContent=`${treasury} XU`;
  const gap=economy.demand-economy.supply;
  $('balance-marker').style.left=`${Math.max(5,Math.min(95,50+gap*.8))}%`;
  $('balance-message').textContent=gap>8?'CẦU VƯỢT CUNG · GIÁ CÓ ÁP LỰC TĂNG':gap< -8?'CUNG VƯỢT CẦU · GIÁ CÓ ÁP LỰC GIẢM':'CUNG VÀ CẦU TƯƠNG ĐỐI CÂN BẰNG';
}
function paintStats() {
  for (const [key,value] of Object.entries(stats)) {
    const display=$('value-'+key),bar=$('bar-'+key);
    display.textContent=value; bar.style.width=`${value}%`;
    bar.classList.toggle('low',key==='prices'?value>76||value<24:value<25);
  }
  renderEconomy(); renderCampaign(); renderBuildings();
}
function renderBuildings() {
  const map=$('market-buildings');map.replaceChildren();
  projects.forEach(project=>{
    const level=levels[project.id]||0;
    const building=document.createElement('div');building.className='map-building'+(level?' built':'');
    const icon=document.createElement('span');icon.textContent=project.icon;
    const label=document.createElement('small');label.textContent=project.name;
    building.append(icon,label);
    if(level){const levelLabel=document.createElement('b');levelLabel.textContent=`CẤP ${level}`;building.append(levelLabel);}
    map.append(building);
  });
}
function renderProjects() {
  const list=$('project-cards');list.replaceChildren();
  projects.forEach(project=>{
    const level=levels[project.id]||0;
    const button=document.createElement('button');button.type='button';button.className='project-card';
    button.disabled=invested||locked||level>=2||treasury<project.cost;
    const icon=document.createElement('span');icon.className='project-icon';icon.textContent=project.icon;
    const copy=document.createElement('span');copy.className='project-copy';
    const name=document.createElement('strong');name.textContent=project.name;
    const detail=document.createElement('small');detail.textContent=project.detail;
    copy.append(name,detail);
    const cost=document.createElement('span');cost.className='project-cost';cost.textContent=level>=2?'TỐI ĐA':`${project.cost} XU`;
    button.append(icon,copy,cost);button.addEventListener('click',()=>buyProject(project.id));list.append(button);
  });
  $('project-feedback').textContent=invested?'Đã đầu tư trong lượt này. Hãy chọn cách xử lý tình huống.':treasury<14?'Ngân quỹ thấp. Bạn vẫn có thể xử lý hồ sơ để nhận thêm xu.':'Có thể bỏ qua đầu tư và quyết định ngay.';
}
function buyProject(id) {
  const project=projects.find(entry=>entry.id===id);
  if (!project||invested||locked||treasury<project.cost||(levels[id]||0)>=2) return;
  treasury-=project.cost;levels[id]=(levels[id]||0)+1;invested=true;
  for (const [key,amount] of Object.entries(project.gain)) {
    if (key in stats) stats[key]=clamp(stats[key]+amount);
    if (key in economy) economy[key]=clamp(economy[key]+amount);
  }
  renderProjects();paintStats();saveGame();
  if(soundOn)playTone(720);
}
function showChapter(index,completedIndex=null) {
  gamePhase='chapter';$('chapter-overlay').hidden=false;
  const chapter=chapterInfo[index];
  $('chapter-overlay-kicker').textContent=`CHƯƠNG 0${index+1} / 04`;
  $('chapter-overlay-title').textContent=chapter.title;
  $('chapter-overlay-body').textContent=chapter.body;
  $('chapter-overlay-goal').textContent=chapter.goal;
  $('chapter-overlay-button').textContent=index===0?'BẮT ĐẦU HÀNH TRÌNH →':'VÀO CHƯƠNG TIẾP →';
  const medal=$('chapter-medal');medal.hidden=completedIndex===null;
  if(completedIndex!==null) medal.textContent=medals[completedIndex]?'★ MỤC TIÊU CHƯƠNG TRƯỚC ĐÃ ĐẠT':'◇ CHƯƠNG TRƯỚC CHƯA ĐẠT MỤC TIÊU — BẠN VẪN CÓ THỂ TIẾP TỤC';
  saveGame();$('chapter-overlay-button').focus();
}
function showRound() {
  gamePhase='round';$('chapter-overlay').hidden=true;
  const item=rounds[roundIndex],chapter=Math.floor(roundIndex/3),rule=ruleData[item.law];
  locked=resolvedChoice!==null;
  $('result').hidden=!locked;$('choices').hidden=locked;
  $('header-status').textContent=`ĐANG DIỄN RA · ${String(roundIndex+1).padStart(2,'0')} / ${rounds.length}`;
  $('day-label').textContent=`PHIÊN CHỢ 0${chapter+1}`;
  $('chapter-title').textContent=rule.title;
  $('round-number').textContent=String(roundIndex+1).padStart(2,'0');
  $('rule-name').textContent=`0${chapter+1} / ${rule.title}`;
  $('rule-principle').textContent=rule.principle;$('rule-symbol').textContent=item.symbol;
  $('event-category').textContent=item.category;$('event-number').textContent=`TÌNH HUỐNG ${String(roundIndex+1).padStart(2,'0')}`;
  $('event-title').textContent=item.title;$('event-description').textContent=item.scene;
  const choices=$('choices');choices.replaceChildren();
  item.choices.forEach((choice,index)=>{
    const button=document.createElement('button');button.type='button';button.className='choice';
    const num=document.createElement('span');num.className='choice-key';num.textContent=String.fromCharCode(65+index);
    const copy=document.createElement('span');copy.className='choice-copy';
    const title=document.createElement('strong');title.textContent=choice.text;
    const detail=document.createElement('small');detail.textContent=choice.sub;
    const arrow=document.createElement('span');arrow.className='choice-arrow';arrow.textContent='↗';
    copy.append(title,detail);button.append(num,copy,arrow);
    button.addEventListener('click',()=>selectChoice(index));choices.append(button);
  });
  renderProjects();renderHistory();paintStats();
  if(locked)displayResult(resolvedChoice);
  saveGame();
}
function marketUpdate(choice,index) {
  // Các tác động là điểm mô phỏng để người học so sánh xu hướng, không phải hệ số thực nghiệm.
  economy.supply=clamp(economy.supply+choice.effects.production*.55);
  economy.demand=clamp(economy.demand+choice.effects.welfare*.34);
  if(roundIndex>=6&&roundIndex<=8){
    economy.money=clamp(economy.money+choice.effects.prices*.7);
    if(roundIndex===7) economy.velocity=clamp(economy.velocity+[8,2,-5][index]);
    if(roundIndex===8) economy.velocity=clamp(economy.velocity+[0,-3,-3][index]);
  }
  let stability=0;
  for(const project of projects){
    const level=levels[project.id]||0;
    if(!level)continue;
    for(const [key,amount] of Object.entries(project.perTurn)) {
      if(key==='stability')stability+=amount*level;
      else if(key in stats)stats[key]=clamp(stats[key]+amount*level);
      else economy[key]=clamp(economy[key]+amount*level);
    }
  }
  const gap=economy.demand-economy.supply;
  const needed=(stats.prices*economy.supply)/Math.max(1,economy.velocity);
  let pressure=Math.round(gap*.075+(economy.money-needed)*.045);
  if(stability)pressure=Math.sign(pressure)*Math.max(0,Math.abs(pressure)-stability);
  stats.prices=clamp(stats.prices+pressure);
  const income=5+Math.round(stats.production/35)+(stats.welfare>=60?1:0);
  treasury+=income;
  return {pressure,income,needed:Math.round(needed)};
}
function applyMarketReaction() {
  const reactions=[];
  if(economy.supply<35&&economy.demand>55){
    stats.prices=clamp(stats.prices+5);stats.welfare=clamp(stats.welfare-3);
    reactions.push('Thiếu hàng kéo dài: giá tăng thêm 5, đời sống giảm 3.');
  }
  if(stats.prices>78){
    stats.welfare=clamp(stats.welfare-3);
    reactions.push('Giá cao làm sức mua suy yếu: đời sống giảm 3.');
  }
  if(stats.welfare<25){
    stats.production=clamp(stats.production-3);
    reactions.push('Đời sống xuống thấp làm sản xuất chậm lại 3.');
  }
  if(stats.production>72){
    economy.supply=clamp(economy.supply+3);
    reactions.push('Năng suất cao tạo thêm 3 hàng hóa cho phiên sau.');
  }
  if(stats.production>75&&!levels.cleanup){
    stats.welfare=clamp(stats.welfare-2);
    reactions.push('Rác thải từ sản xuất tăng: đời sống giảm 2.');
  }
  if(stats.production-stats.welfare>34){
    stats.welfare=clamp(stats.welfare-2);
    reactions.push('Lợi ích tăng trưởng phân bổ không đều: đời sống giảm 2.');
  }
  return reactions;
}
function displayResult(index,report=null) {
  const choice=rounds[roundIndex].choices[index];
  const labels={production:'Sản xuất',prices:'Giá cả',welfare:'Đời sống'};
  $('result-delta').textContent=Object.entries(choice.effects).map(([key,value])=>`${labels[key]} ${value>0?'+':''}${value}`).join(' · ');
  $('result-story').textContent=choice.result;
  $('result-lesson').textContent=choice.lesson;
  $('result-stamp').textContent='BÁO CÁO PHIÊN CHỢ';
  $('choices').hidden=true;$('result').hidden=false;
  const current=report||history[history.length-1]?.report;
  $('turn-report-text').textContent=current||'Chỉ số của phiên chợ đã được cập nhật theo lựa chọn của bạn.';
  $('continue-btn').textContent=roundIndex===rounds.length-1?'XEM BÁO CÁO CUỐI PHIÊN':(roundIndex+1)%3===0?'TỔNG KẾT CHƯƠNG':'SANG TÌNH HUỐNG TIẾP';
  renderProjects();renderHistory();paintStats();
}
function selectChoice(index) {
  if(locked||$('chapter-overlay').hidden===false)return;
  locked=true;resolvedChoice=index;
  const item=rounds[roundIndex],choice=item.choices[index];
  for(const key of Object.keys(stats))stats[key]=clamp(stats[key]+choice.effects[key]);
  const update=marketUpdate(choice,index);
  const reactions=applyMarketReaction();
  const report=`Cung ${economy.supply}, cầu ${economy.demand}; lượng tiền mô phỏng ${economy.money}, mức cần thiết theo M = (P × Q) / V khoảng ${update.needed}. Áp lực cân đối làm chỉ số giá thay đổi ${update.pressure>0?'+':''}${update.pressure} điểm. Thu về ${update.income} xu cho ngân quỹ.${reactions.length?' '+reactions.join(' '):''}`;
  history.push({law:item.law,title:item.title,choice:choice.text,report});
  displayResult(index,report);saveGame();
  if(soundOn)playTone(index===0?660:390);
}
function renderHistory() {
  const list=$('history-list');list.replaceChildren();
  if(!history.length){const li=document.createElement('li');li.className='history-empty';li.textContent='Các quyết định của bạn sẽ xuất hiện ở đây.';list.append(li);return;}
  history.slice(-5).forEach(entry=>{
    const li=document.createElement('li'),law=document.createElement('small'),title=document.createElement('span'),choice=document.createElement('b');
    law.textContent=entry.law;title.textContent=entry.title;choice.textContent=entry.choice;li.append(law,title,choice);list.append(li);
  });
}
function advance() {
  if(!locked)return;
  const completed=(roundIndex+1)%3===0;
  if(completed)medals.push(chapterInfo[Math.floor(roundIndex/3)].check());
  if(roundIndex===rounds.length-1){showEnd();return;}
  roundIndex++;invested=false;locked=false;resolvedChoice=null;
  if(completed)showChapter(Math.floor(roundIndex/3),Math.floor((roundIndex-1)/3));
  else showRound();
  window.scrollTo({top:0,behavior:'smooth'});
}
function showEnd() {
  gamePhase='end';$('chapter-overlay').hidden=true;$('game-screen').hidden=true;$('end-screen').hidden=false;$('header-status').textContent='PHIÊN CHỢ ĐÃ KHÉP LẠI';
  const balanced=stats.production>=50&&stats.welfare>=50&&stats.prices>=25&&stats.prices<=75;
  $('end-title').textContent=balanced?'Khu chợ phát triển bền vững.':'Khu chợ vẫn đang học cách cân bằng.';
  $('end-lead').textContent=`Bạn đã xử lý ${history.length} hồ sơ, đầu tư ${Object.values(levels).reduce((sum,value)=>sum+value,0)} công trình và đạt ${medals.filter(Boolean).length}/4 mục tiêu chương. Mỗi lựa chọn tạo ra lợi ích, chi phí và tác động đến các chủ thể khác nhau.`;
  $('ending-rank').textContent=medals.filter(Boolean).length===4?'★ DANH HIỆU: NHÀ ĐIỀU HÀNH THỊ TRƯỜNG':medals.filter(Boolean).length>=2?'◇ DANH HIỆU: NGƯỜI CÂN NHẮC':'⌁ DANH HIỆU: NGƯỜI HỌC VIỆC';
  const final=$('final-meters');final.replaceChildren();
  [['production','SẢN XUẤT','🏭'],['prices','GIÁ CẢ','🪙'],['welfare','ĐỜI SỐNG','🤝']].forEach(([key,label,icon])=>{
    const box=document.createElement('div'),name=document.createElement('span'),value=document.createElement('strong'),track=document.createElement('div'),fill=document.createElement('i');
    box.className='final-meter';name.textContent=`${icon} ${label}`;value.textContent=stats[key];track.className='meter-track';fill.style.width=`${stats[key]}%`;track.append(fill);box.append(name,value,track);final.append(box);
  });
  try{localStorage.removeItem('phien-cho-save-v2');}catch{}
  window.scrollTo({top:0,behavior:'smooth'});
}
function startGame() {
  stats={...baseStats};economy={...baseEconomy};treasury=48;roundIndex=0;history=[];levels={};medals=[];invested=false;locked=false;resolvedChoice=null;
  $('intro-screen').hidden=true;$('end-screen').hidden=true;$('game-screen').hidden=false;
  showRound();showChapter(0);if(soundOn)playTone(520);
}
function resumeGame(saved) {
  stats=saved.stats;economy=saved.economy;treasury=saved.treasury;roundIndex=saved.roundIndex;history=saved.history;levels=saved.levels;medals=saved.medals;invested=saved.invested;resolvedChoice=saved.resolvedChoice;locked=resolvedChoice!==null;
  $('intro-screen').hidden=true;$('end-screen').hidden=true;$('game-screen').hidden=false;
  showRound();if(saved.gamePhase==='chapter')showChapter(Math.floor(roundIndex/3));
}
function playTone(frequency){try{const context=new AudioContext(),osc=context.createOscillator(),gain=context.createGain();osc.frequency.value=frequency;gain.gain.setValueAtTime(.06,context.currentTime);gain.gain.exponentialRampToValueAtTime(.001,context.currentTime+.12);osc.connect(gain);gain.connect(context.destination);osc.start();osc.stop(context.currentTime+.13);osc.onended=()=>context.close();}catch{}}
const saved=readSave();
if(saved){
  $('begin-btn').textContent='TIẾP TỤC PHIÊN CHỢ →';
  const newButton=document.createElement('button');newButton.type='button';newButton.className='new-game-btn';newButton.textContent='Bắt đầu lại từ đầu';
  newButton.addEventListener('click',startGame);$('begin-btn').after(newButton);
}
$('begin-btn').addEventListener('click',()=>saved?resumeGame(saved):startGame());
$('chapter-overlay-button').addEventListener('click',()=>showRound());
$('continue-btn').addEventListener('click',advance);
$('replay-btn').addEventListener('click',startGame);
$('sound-toggle').addEventListener('click',event=>{soundOn=!soundOn;event.currentTarget.textContent=soundOn?'♫':'♪';event.currentTarget.setAttribute('aria-pressed',String(soundOn));if(soundOn)playTone(520);});
document.addEventListener('keydown',event=>{if($('game-screen').hidden||locked||!$('chapter-overlay').hidden)return;const key={a:0,b:1,c:2}[event.key.toLowerCase()];if(key!==undefined){const button=$('choices').children[key];if(button)button.click();}});
