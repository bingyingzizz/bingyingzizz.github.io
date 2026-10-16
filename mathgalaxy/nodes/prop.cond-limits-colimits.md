# Cond 的极限与余极限　`prop.cond-limits-colimits`
$\mathrm{Cond}$ 的极限逐点算，余极限要先层化
layer 17 · 命题 · 凝聚态集 · 凝聚态数学
[在星图里打开](../#n=prop.cond-limits-colimits)　·　[节点索引](../index.md)

$\mathrm{Cond}$ 有所有（小）极限与余极限。**极限逐点计算**：对每个紧 Hausdorff 空间 $S$，

$$\Bigl(\varprojlim_{i} X_{i}\Bigr)(S) = \varprojlim_{i} X_{i}(S).$$

**余极限不能这样算** —— 它是「先在预层里逐点取余极限、再**层化**」：

$$\Bigl(\varinjlim_{i} X_{i}\Bigr)(S) = \Bigl(\text{层化}\bigl(S' \mapsto \varinjlim_{i} X_{i}(S')\bigr)\Bigr)(S).$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/prop.cond-limits-colimits.2.md](./prop.cond-limits-colimits.2.md)

refs: Le Stum, Corollary 4.1.6；Le Stum, §4.1

> 说明见 `notes/prop.cond-limits-colimits.md`

引用：`prop.cond-limits-colimits`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
