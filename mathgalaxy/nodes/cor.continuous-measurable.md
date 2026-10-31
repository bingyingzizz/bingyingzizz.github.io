# 连续 ⟹ Borel 可测　`cor.continuous-measurable`
推论：连续函数是 Borel 可测的
layer 15 · 推论 · 可测函数与收敛 · 实变函数+数学分析+拓扑学
[在星图里打开](../#n=cor.continuous-measurable)　·　[节点索引](../index.md)

设 X, Y 是拓扑空间，各配 $Borel \sigma$代数 $\mathfrak{B}_X, \mathfrak{B}_Y$。则

$$f : X \to Y\text{ 连续} \implies f\text{ 是} (\mathfrak{B}_X, \mathfrak{B}_Y)-\text{可测的}$$

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/cor.continuous-measurable.2.md](./cor.continuous-measurable.2.md)

refs: Folland, Real Analysis, §2.1；Halmos, Measure Theory, §18

## 说明
连续的定义就是「开集的原像开」；而开集生成 $\mathfrak{B}_Y$，用上一条的判定准则 (2) 立刻得到。

引用：`cor.continuous-measurable`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
