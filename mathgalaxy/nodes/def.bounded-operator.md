# 有界线性算子　`def.bounded-operator`
有界线性算子与算子范数
layer 13 · 定义 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=def.bounded-operator)　·　[节点索引](../index.md)

设 $u : E \to F$ 线性。称 $u$ **有界**，若存在 $C$ 使 $\|u(x)\| \le C\|x\|$ 对一切 $x$ 成立。全体记 $B(E, F)$，并记 $B(E) := B(E, E)$。定义

$$\|u\| := \sup_{\|x\| \le 1} \|u(x)\| = \sup_{\|x\| = 1} \|u(x)\| = \sup_{x \ne 0} \frac{\|u(x)\|}{\|x\|} ,$$

它使 $B(E, F)$ 成为赋范空间（$E = 0$ 时约定 $\|u\| = 0$）。

## 它能推出什么 / 谁在用它
- 被 [`thm.lax-milgram`](../nodes/thm.lax-milgram.md) Lax–Milgram 定理 用

- …另有出边，续页见 [nodes/def.bounded-operator.3.md](./def.bounded-operator.3.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.bounded-operator.2.md](./def.bounded-operator.2.md)

refs: Rudin, Functional Analysis · 有界线性算子、对偶与 Neumann 级数

> 说明见 `notes/def.bounded-operator.md`

引用：`def.bounded-operator`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
