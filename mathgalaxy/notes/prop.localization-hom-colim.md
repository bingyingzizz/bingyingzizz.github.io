# 局部化的 Hom 是滤过余极限　`prop.localization-hom-colim`　·　说明
根 `../`

**证明。** 沿用分式的写法：$\operatorname{Hom}_{\mathrm{ho}}(X, Y)$ 的元素是分式 $X \xleftarrow{w} X' \xrightarrow{f} Y$（$w \in W$）在等价关系下的类。
- **做成余极限**：记 $J$ 是以 $(w : X'-\!\!\to X) \in W$ 为对象、以「$v : X''-\!\!\to X'$ 且 $wv \in W$」为态射的范畴，则
$$\varinjlim_{(X'\to X)\in J}\operatorname{Hom}_{\mathcal{C}}(X', Y)$$
的元素正是「在某个 $X'$ 上取一个 $f$，两个代表元在更小的 $X''$ 上相同就算同一个」—— 与分式的等价关系逐条对齐 ✓。
- **$J$ 是滤过的**：给两个对象 $w_{1} : X_{1}\to X$、$w_{2} : X_{2}\to X$，由 **Ore 条件 2**（把 $w_{2}$ 提到 $w_{1}$ 前面）得到 $X''$ 同时映到 $X_{1}$ 与 $X_{2}$，且两条复合都在 $W$ 里 —— 这就是余锥 ✓；两个平行态射的等化同样由 Ore 条件给出 ✓。
- 于是该余极限是**滤过**余极限，且它就是 $\operatorname{Hom}_{\mathrm{ho}}(X,Y)$ ✓。
于是局部化的 Hom「原则上无从下手」，在分式演算成立时变成一个可以计算的

> 续见 notes/prop.localization-hom-colim.2.md
