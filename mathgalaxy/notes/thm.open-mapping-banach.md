# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　说明
根 `../`

**证明。** 分两步：先用纲定理把「像」撑到含一个球（此时只用到 $E$ 完备），再用 $E$ 的完备性把闭包去掉。

**第一步：$\overline{u(B_E)}$ 含 $0$ 的邻域。** 因为 $E = \bigcup_{k \ge 1} k\,B_E$，作用 $u$ 得

$$F = u(E) = \bigcup_{k \ge 1} u(k B_E) \subseteq \bigcup_{k \ge 1} \overline{u(k B_E)} .$$

若每个 $\overline{u(k B_E)}$ 都无处稠密，$F$ 就是可数个无处稠密集之并，与「$F$ 完备 $\implies$ 第二纲」矛盾。所以某个 $k$ 使 $\overline{u(k B_E)}$ 含内点：存在 $y_0$ 与 $\delta > 0$ 使 $B_F(y_0, \delta) \subseteq \overline{u(k B_E)}$。

把这一点搬回原点。取 $x_0 \in k B_E$ 使 $\|y_0 - u(x_0)\| < \delta/2$（$y_0$ 在闭包里，故可这样逼近），则对任意 $\|z\| < \delta/2$ 有 $y_0 + z \in \overline{u(k B_E)}$，于是 $z = (y_0 + z) - u(x_0) + (u(x_0) - y_0)$ 落在 $\overline{u(kB_E)} - u(x_0) + B(0,\delta/2)$ 里；而 $u(kB_E) - u(x_0) = u(kB_E - x_0) \subseteq u(2k B_E)$（$x_0 \in kB_E$）。合并得

> 续见 notes/thm.open-mapping-banach.2.md
