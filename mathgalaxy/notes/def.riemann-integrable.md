# Riemann 可积　`def.riemann-integrable`　·　说明
根 `../`

⭐ 定义里最容易漏的两个词：**任意**与**模**。不是「存在一列分割让和收敛」，而是「模足够小的**所有**分割、**所有**标记都落在 $I$ 附近」。

⭐ 等价说法（Darboux 形式，见「Darboux 判据」）：$\sup_P L(f, P) = \inf_P U(f, P)$。两条定义等价不是免费的 —— 它需要证明，这个证明就是 `thm.riemann-criterion`。

⚠ 取值在 $\mathbb{C}$ 的函数可积定义为实部与虚部分别可积；向量值同理。

⚠ 有界是可积的**前提**：无界函数在 Riemann 意义下不可积（Lebesgue 意义下可以，只要 $\int |f| < \infty$）。
