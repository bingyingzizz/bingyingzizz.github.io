# 重排不变性　`thm.rearrangement`
定理：绝对收敛级数任意重排后和不变
layer 20 · 定理 · 数项级数的敛散性 · 分析学
[在星图里打开](../#n=thm.rearrangement)　·　[节点索引](../index.md)

设 $\sum a_n$ **绝对收敛**，$\sigma : \mathbb{N} \to \mathbb{N}$ 是任意双射。则 $\sum a_{\sigma(n)}$ 也绝对收敛，且

$$\sum_{n=1}^{\infty} a_{\sigma(n)} = \sum_{n=1}^{\infty} a_n$$

## 为什么成立（入边，证明在 proofs/）
- [`def.absolute-convergence`](../nodes/def.absolute-convergence.md) 绝对收敛 + [`thm.absolute-implies-convergent`](../nodes/thm.absolute-implies-convergent.md) 绝对收敛 ⟹ 收敛：绝对收敛 $\implies$ 重排不变　[proofs/imp.rearrangement.md](../proofs/imp.rearrangement.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.rearrangement.2.md](./thm.rearrangement.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 3

> 说明见 `notes/thm.rearrangement.md`

引用：`thm.rearrangement`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
