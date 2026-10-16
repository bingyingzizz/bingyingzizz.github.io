# 切片范畴　`def.slice-category`　·　说明
根 `../`

这正是把「元素范畴」搬到预层上：$T(X)$ 的元素当元素看，遗忘函子 $j_{T}$ 把 $(X, s)$ 送回 $X$。

⭐ 逗号范畴的写法把它的身份说清了：它是**预层 $T$ 沿着 Yoneda 嵌入往回拉**得到的那个范畴 —— 一边是 $\mathcal{C} \hookrightarrow \widehat{\mathcal{C}}$，一边是 $\mathbf{1} \xrightarrow{T} \widehat{\mathcal{C}}$。它也解释了为什么 $X \in \mathcal{C}$ 时 $\mathcal{C}/X \simeq \widehat{\mathcal{C}}/h_{X}$。

它的用处是给预层配一个**指标范畴**：谈「这个预层由哪些点拼起来」时，指标就跑在 $\mathcal{C}/T$ 上（稠密性定理就是这么用的）。
