# 绝对连续函数　`def.ac-function`
绝对连续函数
layer 22 · 定义 · 有界变差与绝对连续 · 实变函数+数学分析
[在星图里打开](../#n=def.ac-function)　·　[节点索引](../index.md)

函数 $F : [a, b] \to \mathbb{C}$ 是**绝对连续的**，当且仅当：对每个 $\varepsilon > 0$ 都有 $\delta > 0$，使得对**任意有限个两两不交的区间** $(a_j, b_j) \subseteq [a, b]$，

$\sum (b_j - a_j) < \delta \implies \sum |F(b_j) - F(a_j)| < \varepsilon$

## 为什么成立（入边，证明在 proofs/）
- [`def.complex`](../nodes/def.complex.md) 复数 ℂ：用到了定义 复数 ℂ　[proofs/dep.sym-complex-def-ac-function.md](../proofs/dep.sym-complex-def-ac-function.md)

- …另有入边，续页见 [nodes/def.ac-function.2.md](./def.ac-function.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.ac-function.3.md](./def.ac-function.3.md)

refs: Folland, Real Analysis, §3.5

> 说明见 `notes/def.ac-function.md`

引用：`def.ac-function`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
