# 基本类　`def.fundamental-class`
基本类（Fundamental Class）
layer 13 · 定义 · 集合族与 σ-代数 · 分析学+集合论

设 $X$ 是集合，$\mathfrak{A} \subseteq \mathcal{P}(X)$。$\mathfrak{A}$ 是 $X$ 上的一个**基本类**，当且仅当

- 对**交**封闭：$A, B \in \mathfrak{A} \implies A \cap B \in \mathfrak{A}$
- 差可以拆开：$A, B \in \mathfrak{A} \implies A \setminus B\text{ 是} \mathfrak{A}\text{ 中有限多个两两不交集合之并}$

## 为什么成立（入边，证明在 proofs/）
- `def.interval` 区间：用到了定义 区间　proofs/dep.interval-ls.md
- `def.subset` 子集：用到了定义 子集　proofs/def-dep.subset-fundamental-class.md

## 它能推出什么 / 谁在用它
- 被 `prop.set-class-properties` 集合族的基本性质 用
- 被 `prop.ls-premeasure` F 给出的预测度 用

refs: Halmos, Measure Theory, §4

> 说明见 `notes/def.fundamental-class.md`
