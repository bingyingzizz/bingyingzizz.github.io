# 绝对值 |x|　`def.abs`
绝对值 $|x|$
layer 9 · 定义 · 实数的运算与不等式 · 数学分析+集合论
[在星图里打开](../#n=def.abs)　·　[节点索引](../index.md)

设 $K$ 是**有序域**（$\mathbb{Q}$ 与 $\mathbb{R}$ 都是），$x \in K$。定义

$$|x| := \begin{cases} x, & x \ge 0 \\ -x, & x < 0 \end{cases} \qquad\text{即}\qquad |x| = \max\{x, -x\}$$

于是 $|x| \ge 0$ 恒成立，且 $|x| = 0 \iff x = 0$。

## 为什么成立（入边，证明在 proofs/）
- [`def.ordered-field`](../nodes/def.ordered-field.md) 有序域：用到了定义 有序域　[proofs/dep.ordered-abs.md](../proofs/dep.ordered-abs.md)

## 它能推出什么 / 谁在用它
- ⇒ [`prop.abs-properties`](../nodes/prop.abs-properties.md) 绝对值的运算性质

- …另有出边，续页见 [nodes/def.abs.2.md](./def.abs.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 1

> 说明见 `notes/def.abs.md`

引用：`def.abs`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
