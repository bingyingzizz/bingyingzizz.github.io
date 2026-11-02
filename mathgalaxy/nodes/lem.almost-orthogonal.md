# 几乎正交引理　`lem.almost-orthogonal`
闭真子空间外的单位向量（Riesz 引理）
layer 11 · 引理 · 赋范空间与有界算子 · 泛函分析
[在星图里打开](../#n=lem.almost-orthogonal)　·　[节点索引](../index.md)

设 $F \subset E$ 是赋范空间 $E$ 的**闭**真子空间。则对每个 $\varepsilon \in (0,1)$ 存在 $e \in E$ 使

$$\|e\| = 1, \qquad d(e, F) := \inf_{y \in F} \|e - y\| \ge 1 - \varepsilon .$$

## 为什么成立（入边，证明在 proofs/）
- [`def.norm`](../nodes/def.norm.md) 范数：用到了定义 范数　[proofs/def-link.fa-norm-almostorth.md](../proofs/def-link.fa-norm-almostorth.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.riesz-ball-compact`](../nodes/thm.riesz-ball-compact.md) 单位球紧 ⟺ 有限维

refs: 泛函分析讲义 2026-09-28

> 说明见 `notes/lem.almost-orthogonal.md`

引用：`lem.almost-orthogonal`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
