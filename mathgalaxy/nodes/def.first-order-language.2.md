# 一阶语言　`def.first-order-language`　·　续页（第 2 页）
[在星图里打开](../#n=def.first-order-language)　·　第 1 页 [nodes/def.first-order-language.md](./def.first-order-language.md)

## 陈述（续）
由符号表，用三条**语法规则**生成全部的**项**与**公式**：
1. 变元、常元符号是**项**；若 $f$ 是 $n$ 元函数符号而 $t_{1}, \ldots, t_{n}$ 是项，则 $f(t_{1}, \ldots, t_{n})$ 是项；
2. 若 $R$ 是 $n$ 元关系符号而 $t_{1}, \ldots, t_{n}$ 是项，则 $R(t_{1}, \ldots, t_{n})$ 是**原子公式**；
3. **公式**由原子公式出发，经 $\neg$、$\wedge$、$\vee$、$\to$、$\forall v_{i}$、$\exists v_{i}$ 
反复组合而成。
例：$\mathcal{L} = \{ \in \}$（$\in$ 是一个二元关系符号）就是**集合论的语言** —— ZFC 的全部公理都写在这门语言里。

> 续见 [nodes/def.first-order-language.3.md](./def.first-order-language.3.md)
