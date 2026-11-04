# 分裂域　`def.splitting-field`
分裂域：让 $f$ 彻底分解的最小扩域
layer 11 · 定义 · Galois 理论 · 抽象代数
[在星图里打开](../#n=def.splitting-field)　·　[节点索引](../index.md)

设 $F$ 是域，$f \in F[x]$ 是**非零**多项式。扩域 $K/F$ 叫 $f$ 的**分裂域**，如果

- $f$ 在 $K[x]$ 中分解成**一次因子**的乘积：$f = c\,(x - \alpha_{1})\cdots(x - \alpha_{n})$，$c \in F^{\times}$；
- 且 $K = F(\alpha_{1}, \ldots, \alpha_{n})$ —— 由这些根**生成**，不多不少。

## 为什么成立（入边，证明在 proofs/）
- [`def.polynomial-ring`](../nodes/def.polynomial-ring.md) 多项式环：用到了定义 多项式环　[proofs/dep.polyring-splitting.md](../proofs/dep.polyring-splitting.md)

- …另有入边，续页见 [nodes/def.splitting-field.2.md](./def.splitting-field.2.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/def.splitting-field.3.md](./def.splitting-field.3.md)

refs: Lang, Algebra, Ch. V §2；Hungerford, Algebra, Ch. V §3

> 说明见 `notes/def.splitting-field.md`

引用：`def.splitting-field`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
