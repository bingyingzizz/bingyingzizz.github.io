# 覆盖筛的四条等价　`prop.sieve-covering-equivalent`　·　说明
根 `../`

jlim_{X \in \mathcal{C}/T} \underline{X}$）取 $T = R$，得 $\widetilde{R} = \sharp R = \varinjlim_{Y \in \mathcal{C}/R} \underline{Y}$。于是「$\widetilde{R} = \underline{X}$」与「$\underline{X} = \varinjlim_{Y \in \mathcal{C}/R} \underline{Y}$」是同一句话。
- **$3 \implies 4$**：余极限是余积的**商** —— 自然映射 $\coprod_{Y \in \mathcal{C}/R} \underline{Y} \to \varinjlim_{Y} \underline{Y}$ 总是满态射；3 成立时右端就是 $\underline{X}$。
- **$4 \iff 2$**：靠一个恒等式。先看**预层**层面：$\coprod_{Y \in \mathcal{C}/R} h_{Y} \to h_{X}$ 的**像恰好是 $R$** —— 它在 $Z$ 处的像是「能穿过某个 $Y \to X \in R$ 的那些 $Z \to X$」，而这正是筛的定义。再对两边作用 $\sharp$：**层化是正合的**（保有限极限），正合函子保像，于是

> 续见 notes/prop.sieve-covering-equivalent.4.md
