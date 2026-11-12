# 极化恒等式　`thm.polarization`
极化恒等式：内积由范数恢复
layer 20 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.polarization)　·　[节点索引](../index.md)

在实内积空间：

$$\langle x, y\rangle = \tfrac{1}{4}\bigl( \|x + y\|^2 - \|x - y\|^2 \bigr) .$$

在复内积空间：

$$\langle x, y\rangle = \tfrac{1}{4}\sum_{k=0}^{3} i^k \,\| x + i^k y \|^2 .$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.parallelogram-inner-product`](../nodes/thm.parallelogram-inner-product.md) 平行四边形法则

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.polarization.2.md](./thm.polarization.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

## 说明
text=**用途**：把内积还原成范数，从而「保范」与「保内积」在实情形等价；复情形用四个方向的组合。完整推导见边 `imp.polarization-proof`。

引用：`thm.polarization`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
