# Hahn–Banach 定理　`thm.hahn-banach`
Hahn–Banach：次线性控制下的线性延拓
layer 13 · 定理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=thm.hahn-banach)　·　[节点索引](../index.md)

设 $X$ 是**实**向量空间，$p : X \to \mathbb{R}$ 是**次线性**的（$p(x + y) \le p(x) + p(y)$，且 $p(tx) = t\,p(x)$ 对 $t \ge 0$），$M \subseteq X$ 是子空间，$f : M \to \mathbb{R}$ 线性且满足 $f \le p$ 于 $M$。则存在线性 $F : X \to \mathbb{R}$ 使 $F|_M = f$ 且 $F \le p$。
> 陈述续见 [nodes/thm.hahn-banach.2.md](./thm.hahn-banach.2.md)


## 为什么成立（入边，证明在 proofs/）
- [`lem.zorn`](../nodes/lem.zorn.md) Zorn 引理：用到了定义 Zorn 引理　[proofs/dep.hb-zorn.md](../proofs/dep.hb-zorn.md)

- …另有入边，续页见 [nodes/thm.hahn-banach.3.md](./thm.hahn-banach.3.md)

## 它能推出什么 / 谁在用它
- …另有出边，续页见 [nodes/thm.hahn-banach.4.md](./thm.hahn-banach.4.md)

refs: Rudin, Functional Analysis, Thm 3.2 · Hahn–Banach；Brezis, Functional Analysis, Thm 1.1 · Hahn–Banach

> 说明见 `notes/thm.hahn-banach.md`

引用：`thm.hahn-banach`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
