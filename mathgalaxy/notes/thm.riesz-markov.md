# Riesz–Markov 表示　`thm.riesz-markov`　·　说明
根 `../`

**在做什么**：把「对函数做线性赋值」与「对集合量大小」这两件事焊起来 —— 于是测度论里的构造（乘积、推前、RN 导数）都能用泛函语言重述，反过来泛函分析里的对偶结论也能落到测度上。

**证明骨架**：① 由 $\Lambda$ 定义集函数 $\mu_{0}(U) := \sup\{\, \Lambda(f) : 0 \le f \le 1,\ \operatorname{supp} f \subseteq U \,\}$；② 证它是外测度、在开集上可加；③ 用 Carathéodory 延拓得到 Borel 测度；④ 用 $X$ 局部紧（Urysohn 引理给「夹逼函数」）证 $\Lambda(f) = \int f\,\mathrm{d}\mu$。

⚠ **本条标骨架**：本图把上面四步作为机制记下，**每一步的细节没有展开**（尤其「开集上可加」那一步要用 $X$ 的局部紧性与有限分割）。需要的工具（`lem.urysohn`、`thm.caratheodory`、`def.outer-measure`）本图都有节点，所以真要补全是可以逐步补的。

> 续见 notes/thm.riesz-markov.2.md
