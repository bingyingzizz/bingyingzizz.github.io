# Leray 零调性　`prop.leray-acyclicity`　·　说明
根 `../`

**证明（截断 + 递推）。** 不妨设 $K^{n} = 0$（$n < 0$）。先设 $K^{\bullet}$ **有界**，记它的「丢掉第 $0$ 项」的截断为 $K'^{\bullet} := (K^{1} \to K^{2} \to \cdots)$，有复形的短正合列
$$0 \to K'^{\bullet} \to K^{\bullet} \to [K^{0}] \to 0 .$$
由「短正合列给出导出三角」，它在 $D(\mathcal{A})$ 里给出三角；把它与 $RF$ 作用后的三角摆在一起（右边用 $R^{n}F$ 的长正合列比较），两列竖直箭头构成三角之间的态射：
$$\begin{array}{ccccccc} FK'^{\bullet} & \to & FK^{\bullet} & \to & FK^{0} & \to & FK'^{\bullet}[1] \\ \downarrow{\scriptstyle \sim} & & \downarrow & & \downarrow{\scriptstyle \sim} & & \downarrow{\scriptstyle \sim} \\ RFK'^{\bullet} & \to & RFK^{\bullet} & \to & RFK^{0} & \to & RFK'^{\bullet}[1]. \end{array}$$
- 第三列左右相等，因为 $K^{0}$ 零调：$RFK^{0} = FK^{0}$；
- 第一列由归纳假设（$K'^{\bullet}$ 更短，且每一项仍零调）是同构；
- 于是由三角的四条「五引理」（两端是同构则中间也是），中间那列也是同构，即 $RFK^{\bullet}

> 续见 notes/prop.leray-acyclicity.2.md
