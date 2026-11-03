# 一点紧化　`def.one-point-compactification`　·　续页（第 2 页）
[在星图里打开](../#n=def.one-point-compactification)　·　第 1 页 [nodes/def.one-point-compactification.md](./def.one-point-compactification.md)

## 陈述（续）
设 $X$ 是拓扑空间。取 $X^{*} := X \sqcup \{\infty\}$，赋拓扑：开集是

1. $X$ 中的开集；
2. 形如 $U \cup \{\infty\}$ 的集合，其中 $U \subseteq X$ 开且 $X \setminus U$ 在 $X$ 中**紧**。
称 $X^{*}$ 为 $X$ 的**一点紧化**（one-point compactification，也叫 Alexandrov 紧化）。

**定理**：
- $X^{*}$ **紧**（对任意 $X$）；
- $X^{*}$ **Hausdorff** $\iff$ $X$ 是局部紧的 Hausdorff 空间（`def.locally-compact`）。
**两条结论的依赖完全不同**（这也是它值得单列的原因）：
- **$X^{*}$ 紧：不需要任何假设**。任取 $X^{*}$ 的开覆盖，必有一个成员含 $\infty$（记 $U\cup\{\infty\}$），于是 $X\setminus U$ 紧；它被剩下的开集盖住，由**紧性**取有限子覆

> 续见 [nodes/def.one-point-compactification.3.md](./def.one-point-compactification.3.md)
