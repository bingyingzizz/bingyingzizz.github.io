# 唯一性定理　`thm.identity`
唯一性定理（解析延拓原理）
layer 23 · 定理 · Cauchy 理论 · 复变函数
[在星图里打开](../#n=thm.identity)　·　[节点索引](../index.md)

设 $f, g$ 在**区域** $\Omega$ 上全纯。若集合

$$Z := \{\, z \in \Omega : f(z) = g(z) \,\}$$

在 $\Omega$ 内有聚点，则 $f \equiv g$。等价地：若 $f$ 在 $\Omega$ 的一个有聚点的子集上为零，则 $f \equiv 0$。

## 为什么成立（入边，证明在 proofs/）
- [`prop.zero-isolated`](../nodes/prop.zero-isolated.md) 零点的孤立性与阶：零点孤立 + 区域连通 $\implies$ 恒等　[proofs/e7:implication.md](../proofs/e7:implication.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.identity.2.md](./thm.identity.2.md)

refs: 王晓光《复变函数》· 唯一性定理与解析延拓；Ahlfors, Complex Analysis (3rd ed.), Ch. 4 §4.3 · The Identity Theorem；Stein–Shakarchi, Complex Analysis, Ch. 2 §2.4 · The identity theorem

> 说明见 `notes/thm.identity.md`

引用：`thm.identity`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
