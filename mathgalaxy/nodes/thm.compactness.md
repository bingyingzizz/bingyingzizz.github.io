# 紧致性定理　`thm.compactness`
紧致性定理：每个有限子集可满足 $\implies$ 整个理论可满足
layer 4 · 定理 · 一阶语言与公式 · 数理逻辑
[在星图里打开](../#n=thm.compactness)　·　[节点索引](../index.md)

设 $\Gamma$ 是一组一阶公式。若 $\Gamma$ 的**每个有限子集**都有模型，则 $\Gamma$ 本身有模型。

等价说法：若 $\Gamma \vDash \varphi$，则存在**有限**的 $\Gamma_{0} \subseteq \Gamma$ 使 $\Gamma_{0} \vDash \varphi$。

## 为什么成立（入边，证明在 proofs/）
- [`thm.completeness-first-order`](../nodes/thm.completeness-first-order.md) 完备性定理：完备性 $\implies$ 紧致性　[proofs/imp.completeness-compactness.md](../proofs/imp.completeness-compactness.md)

- …另有入边，续页见 [nodes/thm.compactness.2.md](./thm.compactness.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.compactness.3.md](./thm.compactness.3.md)

refs: Enderton, A Mathematical Introduction to Logic, Ch. 2.5；Chang–Keisler, Model Theory

> 说明见 `notes/thm.compactness.md`

引用：`thm.compactness`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
