# Möbius 和的恒等式　`thm.mu-sum`
$\mu$ 的和：只有 $n=1$ 剩下 $1$
layer 16 · 定理 · 数论函数与素数分布 · 数论
[在星图里打开](../#n=thm.mu-sum)　·　[节点索引](../index.md)

对 $n \ge 1$，

$$\sum_{d \mid n} \mu(d) = \begin{cases} 1, & n = 1, \\ 0, & n > 1 . \end{cases}$$

## 为什么成立（入边，证明在 proofs/）
- [`def.mobius-function`](../nodes/def.mobius-function.md) Möbius 函数：$\sum_{d\mid n}\mu(d) = [n=1]$：二项式展开　[proofs/imp.nt-mu-sum.md](../proofs/imp.nt-mu-sum.md)
- [`def.mobius-function`](../nodes/def.mobius-function.md) Möbius 函数：用到了定义 Möbius 函数　[proofs/e145:definition.md](../proofs/e145:definition.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.mu-sum.2.md](./thm.mu-sum.2.md)

refs: 华罗庚《数论导引》第三章

> 说明见 `notes/thm.mu-sum.md`

引用：`thm.mu-sum`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
