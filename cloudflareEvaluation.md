# CloudFlare Evaluation

- Trước khi đi vào chi tiết đánh giá CloudFlare Pages, tôi sẽ giới thiệu một số thông tin về CloudFlare.

![cloudFlare](https://blog-cloudflare-com-assets.storage.googleapis.com/2019/07/cf-logo-social-media.png)


### 1. CloudFlare là gì ?

- CloudFlare cung cấp dịch vụ DNS để quản lí lượng truy cập giữa server và các client qua lớp bảo vệ của họ.
- Các lượng truy cập sẽ đi qua máy chủ phân giải tên miền của CloudFlare để xem các dữ liệu của website thay vì truy cập trực tiếp đối với máy chủ phân giải tên miền của DNS.
- CloudFlare được cho là sử dụng các công nghệ giống CDN nhưng lại không như CDN truyền thống. CloudFlare được mô tả chính xác hơn như một proxy đảo ngược bộ nhớ đệm. CloudFlare xử lý tất cả các yêu cầu đến một trang web.

### 2. Ưu điểm và nhược điểm khi sử dụng CloudFlare

#### 2.1 Ưu điểm

 - Giúp website có tốc độ tải nhanh hơn bằng cách lưu một bản bộ nhớ đệm (cache)

- Tiết kiệm được băng thông ( vì CloudFlare hạn chế truy cập trực tiếp vào server) vì vậy chỉ bằng 1/2 1/3 trước khi sử dụng.

- Tăng khả năng bảo mật ( hạn chế truy cập từ các quốc gia được chỉ định từ trước, cấm truy cập với các IP không rõ ràng, firewall ứng dụng cho website, gói Pro hỗ trợ bảo vệ khắc khe đối với các chức năng đăng nhập.

#### 2.2 Nhược điểm

 - Hoàn toàn phụ thuộc vào thời gian uptime của CloudFlare (nếu CloudFlare bị down thì quá trình truy cập bị gián đoạn)

- Việc không tiết lộ ra IP của web là một điểm lợi cũng là một điểm hại vì nếu bảo mật không kĩ thì dễ bị tấn công.

- Sử dụng FireWall của hosting dễ bị hiểu lầm là một địa chỉ tấn công và website dễ bị offline vì lí do đó.

### 3. Cân nhắc sử dụng CloudFlare (Evaluate)

| Factor          | Description                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Tốc độ**      | CloudFlare giúp tăng lưu lượng trang web tùy trường hợp. Nó phụ thuộc vào máy chủ được đặt ở đâu. Ví dụ nếu đặt không quá xa so với người truy cập thì sẽ khiến tốc độ truy cập chậm hơn và ngược lại. |
| **Auto Minify** | Việc loại bỏ những thứ không cần thiết ở trang web (khoảng trắng, kí tự không cần thiết, chú thích) và nén kích thước tệp giúp cải thiện tốc độ truy cập ở trang web                                   |
| **Bảo mật**     | giảm thiểu được tấn công dựa vào việc ẩn IP máy chủ, sử dụng CDN và SSL miễn phí do CloudFlare cung cấp giúp chúng ta giảm thiểu chi phí và rất tiện lợi trong việc thao tác sử dụng                   |

> **Kết luận**: Đối với ý kiến cá nhân, việc sử dụng CloudFlare phải tùy thuộc vào vị trí đặt server máy chủ, ví dụ như ở công ty Shinonomekazan nếu muốn lượng người truy cập ở Việt Nam truy cập được trang web với tốc độ nhanh thì chúng ta nên đặt máy chủ ở Nhật Bản (lí do thì tôi đã phân tích ở trên). Thêm vào đó, sử dụng CloudFlare cũng giúp công ty có thể tiết kiệm thêm chi phí. Tuy nhiên, vì là sử dụng miễn phí các CDN của CloudFlare nên cần chú ý về tính chất bảo mật và mức độ ổn định của nó ( Vì ngày 22/6/2022 CloudFlare đã gặp lỗi toàn cầu khiến nhiều trang web bị sập).

### 4.CloudFlare Pages

#### 4.1 General

 - Thời gian gần đây Cloudflare vừa phát hành dịch vụ Cloudflare Page miễn phí, với các tính năng gần tương tự như của Netlify tất cả đều được thiết lập nhằm cạnh tranh với Netlify trong thời gian tới

 - Cloudflare Pages cung cấp URL mặc định là pages.dev. Nếu bạn không custom domain vào ứng dụng của mình, thì url trong trang Cloudflare Pages của bạn có dạng https://your-github-repo.pages.dev.

#### 4.2 Bảng so sánh giữa Netify và CloudFlare Pages

|         Details         | Cloudflare Pages |      Netify       |
| :---------------------: | :--------------: | :---------------: |
|      Custom Domain      |    Yes (Free)    |    Yes (Free)     |
|       SSL (HTTPS)       |    Yes (Free)    |    Yes (Free)     |
|   Git-based Workflows   |       Yes        |        Yes        |
|  Serverless Functions   |       Yes        |        Yes        |
|  Continuous Deployment  |       Yes        |        Yes        |
|     DNS Management      |       Yes        |        Yes        |
|         HTTP/3          |       Yes        |        No         |
|          QUIC           |       Yes        |        No         |
|       Global CDN        |       Yes        |        No         |
| Unlimited Collaborators |       Yes        |        No         |
|     Build Capacity      | 500 builds/month | 300 minutes/month |
|        Bandwidth        |    Unlimited     |       100GB       |
|      Team Members       |    Unlimited     |         1         |


> **Dựa vào các thống kê số liệu trong bảng mà tôi đã đề cập ở trên, ta có thể thấy được việc CloudFlare Pages không chỉ đảm bảo được đầy đủ các dịch vụ mà Netify cung cấp mà còn có các mặt vượt trội hơn so với Netify như Bandwidth không giới hạn (Netify giới hạn trong phạm vi 100GB), Build Capacity vượt trội hơn(500 builds so với 300 buils). Vì vậy, công ty chúng ta hoàn toàn có thể thay đổi dùng CloudFlare Pages thay cho Netify**
### 5. Paid Plan for Netify and CloudFlare
Trước tiên, tôi sẽ phân tích từng Paid Plan đối với cả Netify và CloudFlare. Sau cùng tôi sẽ đưa ra quan điểm cá nhân rằng cái nào sẽ phù hợp hơn đối với công ty của chúng ta.
#### 5.1 Cloudflare Paid Plan 
<img src="./markdownPic/cloudFlareService.jpg">

Trước tiên, các tính năng như **Fast, Easy-to-use DNS**, **Unmetered DDoS Protection for Layers 3-7**, **CDN**,**Universal SSL Certificate**, **Free Managed Ruleset** giữa các gói miễn phí và các gói có phí là đều được đảm bảo đầy đủ nên không có gì đáng nói. Vì vậy, tôi sẽ đi thẳng vào những tính năng khác biệt giữa khóa có phí và khóa miễn phí.

<img src="./markdownPic/cloudFlareServicePlan.jpg">
Đối với việc sử dụng miễn phí, việc hỗ trợ WAF là không có và việc này thật sự rất quan trọng trong việc phát triển website sau này của công ty, vì vậy các gói tính phí được khuyến cáo sử dụng nếu công ty muốn chuyển qua sử dụng CloudFlare.

Thêm vào đó, việc tăng tốc độ tải trang cũng như việc tối ưu tốc độ load các hình ảnh ở các màn hình di động là một việc cần thiết (vì tôi thấy công ty chú trọng ở việc các màn hình ở kích thước nhỏ) nhưng gói miễn phí của CloudFlare không hỗ trợ cho việc đó và chỉ hỗ trợ ở trang có phí.

Việc CloudFlare hỗ trợ PCI DSS chỉ ở gói business trở lên, nếu công ty có kế hoạch về các dịch vụ giao dịch quốc tế trong tương lai thì cũng có thể cân nhắc sử dụng. 

Hiện tại thì dịch vụ uptime Service Credits cũng thực sự chưa cần thiết để công ty sử dụng nên tôi sẽ bỏ qua dịch vụ này. 

<img src="./markdownPic/cloudFlareServiceDifference.jpg">

Các options hỗ trợ sẽ tùy thuộc vào từng gói khác nhau, chúng ta có thể dựa vào hình mà tôi đã đưa ở trên để xem xét, tùy thuộc vào yêu cầu của công ty mà sẽ có những yêu cầu về mặt support options khác nhau. 

Sự khác biệt lớn giữa các gói có phí và miễn phí chính là **page rules**. **Các gói sẽ có sự chênh lệch về việc cho phép đổi page rules khác nhau. Đối với gói miễn phí thì lượng page rules có thể sử dụng là quá thấp nên tôi khuyến khích công ty nên tham khảo bên các gói có phí để phục vụ cho việc phát triển.**

Về việc Cloudflare for SaaS thì các gói có phí và miễn phí là như nhau chỉ khác biệt ở gói Enterpris (Tôi nghĩ công ty chúng ta sẽ không cần dùng đến gói này).

#### 5.2 Netify Paid Plan
<img src="./markdownPic/NetifyService.jpg">

Netify cũng cung cấp các gói dịch vụ có mức tương đồng với giá rẻ hơn, nhưng như tôi đã phân tích ở trên thì có nhiều chức năng bị thiếu so với CloudFlare. Thêm vào đó, việc chúng ta quan tâm nhất chính là băng thông thì ở gói miễn phí dường như băng thông bị hạn chế rất nhiều. Đối với các tổ chức như công ty thì băng thông rất quan trọng và ảnh hưởng nhiều đến quá trình phát triển. Và mức độ giới hạn băng thông của từng gói hỗ trợ cũng hoàn toàn khác nhau (được đề cập ở Netify cao nhất là 1.5TB đối với băng thông) và nếu muốn mở rộng thì phải sử dụng khóa Enterprise. 

Thêm vào đó, các dịch vụ được đề cập trong hình thì cơ bản gói pro của CloudFlare đã hỗ trợ gần đủ.
#### 5.3 Evaluate  Paid Plan

- Đầu tiên, tôi nghĩ công ti nên tham khảo và chuyển qua sử dụng các gói có phí để được hỗ trợ nhiều hơn (vấn đề băng thông và bảo mật cùng với nhiều yếu tố khác được đề cập).

- Nếu sử dụng gói có phí thì đối với Pricing của cả Netify và CloudFlare cũng có sự khác biệt. gói CloudFlare sẽ đắt hơn so với Netify nhưng khi sử dụng CloudFlare thì chúng ta sẽ được sử dụng băng thông không giới hạn (Thêm vào đó, CloudFlare hỗ trợ tiết kiệm băng thông) so với Netify giới hạn ở mức 1.5TB đối với gói business.

- Mức độ bảo mật bằng Firewall của CloudFlare là một yếu tố quan trọng để công ty có thể quyết định chuyển sang sử dụng CloudFlare

**Kết luận: Việc chuyển qua sử dụng CloudFlare thay cho Netify là hoàn toàn có thể xem xét và sử dụng (khuyến khích sử dụng gói có phí).**
### 6. References:

- https://blog.kdata.vn/cloudflare-la-gi-tat-tan-tat-ve-cloudflare-ma-ban-can-phai-biet-5436/#:~:text=Cloudflare%20l%C3%A0%20d%E1%BB%8Bch%20v%E1%BB%A5%20DNS,gi%E1%BA%A3i%20t%C3%AAn%20mi%E1%BB%81n%20c%E1%BB%A7a%20CloudFlare.

- https://phannhatchanh.com/cloudflare-pages-and-netlify/
- https://blog.cloudflare.com/
- https://developers.cloudflare.com/pages/migrations/migrating-from-netlify

- https://developers.cloudflare.com/pages/framework-guides/deploy-anything/
