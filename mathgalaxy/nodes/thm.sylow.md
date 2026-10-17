# Sylow 定理　`thm.sylow`
定理（Sylow）：存在性、共轭性、计数
layer 12 · 定理 · 群作用与置换 · 抽象代数
[在星图里打开](../#n=thm.sylow)　·　[节点索引](../index.md)

设 $G$ 是有限群，$|G| = p^{a} m$，其中 $p$ 是素数、$p \nmid m$。则

**（1）存在性**：对每个 $0 \le i \le a$，$G$ 有 $p^{i}$ 阶子群；特别地有 $p^{a}$ 阶子群，叫 **Sylow $p$-子群**。

**（2）共轭性**：$G$ 的任两个 Sylow $p$-子群共轭；更一般地，任何 $p$-子群都含在某个 Sylow $p$-子群之中。

**（3）计数**：Sylow $p$-子群的个数 $n_p$ 满足

$$n_p \equiv 1 \pmod{p}, \qquad n_p \mid m, \qquad n_p = [G : N_G(P)]$$
> 陈述续见 [nodes/thm.sylow.2.md](./thm.sylow.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.sylow.3.md](./thm.sylow.3.md)

refs: Lang, Algebra, Ch. I §6；Dummit–Foote, Abstract Algebra, §4.5

> 说明见 `notes/thm.sylow.md`

引用：`thm.sylow`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
