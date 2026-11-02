# Riesz 表示（Hilbert）　`thm.riesz-hilbert`
Riesz 表示：$H^* \cong \overline{H}$
layer 17 · 定理 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=thm.riesz-hilbert)　·　[节点索引](../index.md)

设 $H$ 是 Hilbert 空间，$\varphi \in H^*$。则存在**唯一**的 $y \in H$ 使

$$\varphi(x) = \langle x, y\rangle \qquad \forall x \in H , \qquad \text{且} \ \|y\| = \|\varphi\| .$$

于是 $y \mapsto \langle \cdot, y\rangle$ 是 $H \to H^*$ 的等距同构（复情形为共轭线性）。

## 它能推出什么 / 谁在用它
- ⇒ [`thm.adjoint-hilbert`](../nodes/thm.adjoint-hilbert.md) 伴随算子

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.riesz-hilbert.2.md](./thm.riesz-hilbert.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

> 说明见 `notes/thm.riesz-hilbert.md`

引用：`thm.riesz-hilbert`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
