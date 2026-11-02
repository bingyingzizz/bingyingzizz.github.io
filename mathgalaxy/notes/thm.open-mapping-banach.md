# 开映射定理（Banach 版）　`thm.open-mapping-banach`　·　说明
根 `../`

证明分三段（**骨架**，细节见 Rudin 2.11）：

① **取内点（Baire）**：$E = \bigcup_k \overline{u(kB_E)}$，由「闭覆盖有内点」某个 $\overline{u(kB_E)}$ 含球，再用线性把它搬回 $0$，得 $\overline{u(B_E)} \supseteq r B_F$。

② **去掉闭包（完备性）**：递归取 $x_n$ 使余项按 $\varepsilon^n$ 缩小而 $\|x_n\|$ 按 $\varepsilon^{n-1}$ 放大；$E$ 完备使 $x = \sum x_n$ 收敛，连续性给出 $u(x) = y$ 且 $\|x\| \le \|y\|/r$。

③ **得到开性**：$\|x\| < 1 \implies u(x)$ 覆盖 $rB_F$，平移伸缩即得「开球的像含开球」。

⚠️ **满射不能去掉**（稠密嵌入 $E \hookrightarrow F$ 不开）；**两边完备都不能去掉**：$E$ 用来拿内点，$F$ 用来去闭包。

⚠️ 与图中 `thm.open-mapping`（**非常数全纯函数**把开集映成开集）**同名不同物**：那条是复分析结论，这条是线性算子的（Baire + 级数逼近）。
