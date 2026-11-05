# 仿紧性与单位分解　`prop.paracompact-partition-unity`　·　说明
根 `../`

正规的情形同理（局部有限覆盖取局部有限的 $\{\operatorname{supp}\rho_{i}\}$）✓。
**$(\Longrightarrow)$ 用正规性逐步造 $\rho_{i}$。**
- 先取一个**局部有限**的开加细 $\{V_{i}\}$（仿紧的定义；正规的情形直接取自局部有限覆盖本身）✓；
- 正规性给出：存在开集 $W_{i}$ 使 $\overline{W_{i}} \subseteq V_{i}$ 且 $\{W_{i}\}$ 仍覆盖 $X$（这是正规空间的标准「收缩」引理，由 Urysohn 引理或它的变体得到）✓；
- ⚠️ 只收缩一次不够：$g_i$ 在 $X\setminus V_i$ 上为零只给 $\operatorname{supp} g_i \subseteq \overline{V_i}$。**再收缩一层**：取开集 $O_i$ 使 $\overline{W_i} \subseteq O_i \subseteq \overline{O_i} \subseteq V_i$（正规性再用一次），对 $(\overline{W_i}, X \setminus O_i)$ 用 **Urysohn 引理**取 $g_i : X \to [0,1]$，$g_i|_{\overline{W_i}} = 1$、$g_i|_{X\setminus O_i} = 0$ —— 于是 $\operatorname{supp} g_i \subseteq \overline{O_i} \subseteq V_i$ ✓；
- 令 $g := \sum_{i} g_{i}$：局部有限性保证这是**局部有限和**，

> 续见 notes/prop.paracompact-partition-unity.3.md
