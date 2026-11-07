# 光滑单位分解　`thm.smooth-partition-unity`　·　说明
根 `../`

**它撑起哪些结论**：黎曼度量存在（`def.riemannian-metric`）、向量丛上纤维度量存在（`prop.bundle-metric`）、最高次形式可积分（`def.integral-form`）、可定向性能用处处非零的 $n$-形式刻画（`prop.volume-form-orientation`）。这些证明的共同结构都是「局部造 + 单位分解粘」，没有一次是凭空构造。

**第二可数不能省**：长直线（long line）是局部欧氏的 Hausdorff 空间，但不可分、不仿紧，上面取不到单位分解 —— 所以流形定义里那两条技术假设不是装饰。

**连续版与光滑版**：连续版只需要仿紧（`prop.paracompact-partition-unity`）；升到光滑要靠鼓包函数把「连续」磨成「光滑」。所以流形上这两个版本是同一件事的两个精度。
