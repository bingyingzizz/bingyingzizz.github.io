# Čech 上同调是沿覆盖筛的余极限　`prop.cech-as-colim`　·　说明
根 `../`

**证明。** 两层意思：**(a) 换覆盖不改变 Čech 复形（在筛的意义下）。** 每个覆盖族 $\mathfrak{X}$ 生成一个筛 $R_{\mathfrak{X}}$，而 $\check{C}^{\bullet}(\mathfrak{X}, M) \to \check{C}^{\bullet}(R_{\mathfrak{X}}, M)$ 是同构 —— 筛版的 Čech 复形本来就是「把 $\mathfrak{X}$ 的交叠一字排开」，细化只是把重复的项并掉。于是「沿覆盖取余极限」与「沿筛取余极限」是同一个余极限（覆盖在筛里是共尾的）。
**(b) 余极限与取同调交换。** $J(X)$ 这个偏序集是**滤过**的：任意两个筛 $R, R'$ 都有上界（取它们生成的筛，或直接取交），任意两个 $R \subseteq R'\subseteq R$ 之间的态射被夹成同一个。而 $\varinjlim$ 在 $\mathrm{Ab}$ 里**正合**（AB5），所以
$$\varinjlim_{R \in J(X)} H^{n}(R, M) = H^{n}\Bigl(\varinjlim_{R \in J(X)} \check{C}^{\bullet}(R, M)\Bigr),$$
而右边括号里那个余极限复形与按覆盖定义的 $\check{C}^{\bullet}(X, M)$ 逐项一致（(a) 说的就是「每个覆盖都已经被某个筛表示

> 续见 notes/prop.cech-as-colim.2.md
