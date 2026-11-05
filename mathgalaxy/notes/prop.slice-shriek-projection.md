# 切片的投影公式　`prop.slice-shriek-projection`　·　说明
根 `../`

**证明。** 投影公式是「左伴随与封闭幺半结构相容」的一般现象：把两边的 Hom 用 $j_{X!} \dashv j_{X}^{-1}$ 与张量–内 Hom 伴随对到同一处，由米田引理得同构 ✓。

最后一式把 $N = \mathbb{Z}$ 代入并记住 $j_{X!}\mathbb{Z} = \mathbb{Z}\cdot X$ ✓。

∎

⚠️ **两式的 $M,N$ 不能混用**：$j_{X!}$ 只定义在 $\mathrm{Ab}(\mathcal{T}/X)$ 上，所以第一式的 $M$、第二式的 $N$ 必须先在切片里；把 $N \in \mathrm{Ab}(\mathcal{T})$ 塞进第二式，$j_{X!}N$ 根本不存在。
