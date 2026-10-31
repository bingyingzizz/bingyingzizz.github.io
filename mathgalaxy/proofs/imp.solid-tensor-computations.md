# 乘积公式 + $\mathbb{R}^{L\blacksquare}=0$ $\implies$ 具体计算
`imp.solid-tensor-computations` · 推出 · strong 边 · 根 `../`

`prop.solid-product-tensor` 大乘积的固态张量积 + `cor.solid-compact-generators` 固态的紧投射对象 → `ex.solid-tensor-computations` 固态张量积的计算

第一条：$\mathbb{Z}_p \otimes^{L\blacksquare} \mathbb{R} = \mathbb{Z}_p \otimes^{L\blacksquare} \mathbb{R}^{L\blacksquare} = (\mathbb{Z}_p \otimes \mathbb{R})^{L\blacksquare} = 0$，因为 $\mathbb{R}^{L\blacksquare} = 0$（`cor.solid-compact-generators` (iii)）。

最后一条：$\mathbb{Z}[[U]] = \prod_{\mathbb{N}} \mathbb{Z}$、$\mathbb{Z}[[T]] = \prod_{\mathbb{N}} \mathbb{Z}$，由 `prop.solid-product-tensor` 得 $\prod_{\mathbb{N}\times\mathbb{N}} \mathbb{Z} = \mathbb{Z}[[U,T]]$。

> 续见 proofs/imp.solid-tensor-computations.2.md
