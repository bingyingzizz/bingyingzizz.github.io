# 序数的定义 + 三歧性 $\implies$ 序数全体是真类
`imp.burali-forti` · 推出 · strong 边 · 根 `../`

`def.ordinal` 序数 + `thm.ordinal-trichotomy` 序数可比 → `thm.burali-forti` 序数全体是真类

反设 $\mathrm{On}$ 是一个集合。

**① $\mathrm{On}$ 传递。** 若 $x \in \mathrm{On}$，则 $x$ 是序数，而序数的元素还是序数（见三歧性的证明 ①），故 $x \subseteq \mathrm{On}$。

**② $\in$ 在 $\mathrm{On}$ 上良序。** 可比性来自三歧性；$\mathrm{On}$ 的非空子集 $S$ 取 $\alpha \in S$，若 $\alpha$ 不是 $\in$-最小元，则由正则公理 $\alpha \cap S$ 有 $\in$-最小元，它也是 $S$ 的 $\in$-最小元。

**③ 于是 $\mathrm{On}$ 是序数。** ①② 正是序数定义的两条。

> 续见 proofs/imp.burali-forti.2.md
