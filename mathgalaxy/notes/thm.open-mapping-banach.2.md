# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　说明
根 `../`

把这一点搬回原点，分**平移**与**相减**两小步。取 $x_0 \in k B_E$ 使 $\|y_0 - u(x_0)\| < \delta/2$（$y_0$ 在闭包里，故可这样逼近）。**平移**：对 $\|z\| < \delta/2$ 有 $\|z + (u(x_0) - y_0)\| \le \|z\| + \|u(x_0) - y_0\| < \delta/2 + \delta/2 = \delta$，故 $u(x_0) + z = y_0 + \bigl(z + u(x_0) - y_0\bigr) \in B_F(y_0, \delta) \subseteq \overline{u(kB_E)}$，即 $B_F(u(x_0), \delta/2) \subseteq \overline{u(kB_E)}$。**相减**：由 $u(x_0) + z \in \overline{u(kB_E)}$ 得 $z = \bigl(u(x_0)+z\bigr) - u(x_0) \in \overline{u(kB_E)} - u(x_0) \subseteq \overline{u(kB_E) - u(x_0)} = \overline{u(kB_E - x_0)}$，而 $x_0 \in kB_E$ 给 $kB_E - x_0 \subseteq 2k\,B_E$，故 $z \in \overline{u(2k\,B_E)}$。于是

$$\overline{u(2k\, B_E)} \supseteq B_F(0, \delta/2) ,$$

> 续见 notes/thm.open-mapping-banach.3.md
