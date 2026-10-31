# 最佳逼近与投影公式　`thm.projection-formula`
定理：正交投影是最佳逼近，且可用标准正交基算出
layer 14 · 定理 · 内积空间与正交性 · 抽象代数
[在星图里打开](../#n=thm.projection-formula)　·　[节点索引](../index.md)

设 $U \subseteq V$ 是有限维子空间，$v \in V$。则

**(1) 最佳逼近性**：$\|v - P_U v\| \le \|v - u\|$ 对一切 $u \in U$ 成立，等号仅当 $u = P_U v$；

**(2) 显式公式**：若 $(e_1, \ldots, e_k)$ 是 $U$ 的标准正交基，则

$$P_U v = \sum_{j=1}^{k} \langle e_j, v \rangle\, e_j, \qquad \|v\|^{2} = \|P_U v\|^{2} + \|v - P_U v\|^{2} \ge \sum_{j=1}^{k} |\langle e_j, v \rangle|^{2}$$
> 陈述续见 [nodes/thm.projection-formula.2.md](./thm.projection-formula.2.md)


## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.projection-formula.3.md](./thm.projection-formula.3.md)

refs: Hoffman–Kunze, Linear Algebra, Ch. 8

> 说明见 `notes/thm.projection-formula.md`

引用：`thm.projection-formula`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
