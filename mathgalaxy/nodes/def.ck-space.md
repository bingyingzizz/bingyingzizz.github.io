# C(K,E)　`def.ck-space`
$C(K,E)$ 与一致度量
layer 17 · 定义 · $C(K)$ 与 Stone–Weierstrass · 泛函分析
[在星图里打开](../#n=def.ck-space)　·　[节点索引](../index.md)

设 $K$ 紧 Hausdorff，$(E, d)$ 度量。在 $C(K, E)$ 上定义

$$\Delta(f, g) := \sup_{x \in K} d\bigl(f(x), g(x)\bigr) .$$

$E$ 赋范时它就是一致范数 $\|f\| = \sup_x \|f(x)\|$。

## 为什么成立（入边，证明在 proofs/）
- [`def.hausdorff`](../nodes/def.hausdorff.md) Hausdorff 空间：用到了定义 Hausdorff 空间　[proofs/def-link.fa-hausdorff-ck.md](../proofs/def-link.fa-hausdorff-ck.md)

- …另有入边，续页见 [nodes/def.ck-space.2.md](./def.ck-space.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.ck-complete`](../nodes/thm.ck-complete.md) C(K,E) 完备

- …另有出边，续页见 [nodes/def.ck-space.3.md](./def.ck-space.3.md)

refs: Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations · 等度连续与 Arzelà–Ascoli

> 说明见 `notes/def.ck-space.md`

引用：`def.ck-space`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
