# Urysohn 引理造出从属于覆盖的局部有限单位分解
`imp.pcpu-urysohn` · 推出 · strong 边 · 根 `../`

`lem.urysohn` Урысон 引理 → `prop.paracompact-partition-unity` 仿紧性与单位分解

对局部有限开加细 $\{V_{i}\}$ 用正规性两次收缩：取开集 $W_{i}$ 使 $\overline{W_{i}} \subseteq V_{i}$ 且 $\{W_{i}\}$ 仍覆盖，再取 $O_{i}$ 使 $\overline{W_{i}} \subseteq O_{i} \subseteq \overline{O_{i}} \subseteq V_{i}$。对闭集对 $(\overline{W_{i}}, X \setminus O_{i})$ 用 Urysohn 引理得 $g_{i}: X \to [0,1]$，在 $\overline{W_{i}}$ 上为 $1$、在 $X \setminus O_{i}$ 上为 $0$，故 $\operatorname{supp} g_{i} \subseteq \overline{O_{i}} \subseteq V_{i}$ 且这族支撑局部有限。令 $\rho_{i} = g_{i} / \sum_{j} g_{j}$（分母处处为正、局部有限故为有限和），即得从属于 $\{U_{i}\}$ 的单位分解。∎

> Urysohn 引理用在造单个 $g_{i}$ 上；求和归一化与局部有限性由加细本身保证。
