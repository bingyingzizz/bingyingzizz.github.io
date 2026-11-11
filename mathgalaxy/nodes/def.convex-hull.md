# 凸包　`def.convex-hull`
凸包：包含 $S$ 的最小凸集
layer 13 · 定义 · Hilbert 空间 · 泛函分析
[在星图里打开](../#n=def.convex-hull)　·　[节点索引](../index.md)

设 $S \subseteq V$。$S$ 的**凸包**定义为

$\operatorname{conv}(S) := \bigcap\{ C : C \supseteq S,\ C \text{ 凸} \}.$

等价地，$\operatorname{conv}(S)$ 恰是 $S$ 中点的所有有限凸组合之集；$S=\emptyset$ 时为空集。

## 它能推出什么 / 谁在用它
- 被 [`def.standard-simplex`](../nodes/def.standard-simplex.md) 标准单纯形 用

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.convex-hull.2.md](./def.convex-hull.2.md)

refs: Conway, A Course in Functional Analysis · Hilbert 空间与正交基

## 说明
⭐ 两条等价刻画：交定义（最小凸集）与有限凸组合定义。前者说明「凸包是最小的」，后者说明「凸包里的点长什么样」。

⚠ 空集的凸包是空集；不要把「凸集」默认成非空。

引用：`def.convex-hull`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
