# Hom 预层是层　`prop.hom-presheaf-sheaf`　·　说明
根 `../`

**证明。** 由「开覆盖给出覆盖」，开覆盖 $U = \bigcup_i U_{i}$ 给出 $\mathrm{Cond}/X$ 里的覆盖 $\coprod_i \underline{U_{i}} \to \underline{U}$ ✓。
而 $Y$ 是拓扑斯 $\mathrm{Cond}/X$ 的对象，拓扑斯的对象对**标准拓扑**下的每个覆盖筛都满足下降 —— 层条件的定义正是「$\operatorname{Hom}(-, Y)$ 把覆盖筛变成等化子」✓。
把这条用在上面的覆盖上：$Y(U) \to \prod_i Y(U_{i}) \rightrightarrows \prod_{i,j} Y(U_{i} \cap U_{j})$ 是等化子，正是 $U \mapsto Y(U)$ 的层条件 ✓。∎

⭐ 一句话：**「$X$ 上的开集给的截面」就是层**，因为开覆盖已经是 $\mathrm{Cond}/X$ 里的覆盖。
