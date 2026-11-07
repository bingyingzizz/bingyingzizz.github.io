# Euler 示性数与亏格　`prop.eulerchar-genus`　·　说明
根 `../`

**三、$H_{1}$ 的秩（标准形上完整）**：闭可定向曲面的连通和满足 $H_{1}(M\#N)\cong H_{1}(M)\oplus H_{1}(N)$。取 $M=T^{2}\setminus D^{2}$、$N$ 为 $g-1$ 个环面的连通和再挖去一个开球，用 `thm.mv-homology`：$H_{1}(\partial)=H_{1}(S^{1})=\mathbb{Z}$ 到 $H_{1}(M)\oplus H_{1}(N)$ 的映射为零（边界圆在 $M$ 内是换位子的乘积，同调为零），故 $H_{1}$ 直和；归纳得 $\operatorname{rank}H_{1}=2g$，与 `def.genus` 的定义一致。所以标准形上「$\chi=2-2g$」与「$g=\tfrac12\operatorname{rank}H_{1}$」完全吻合。

**四、缺口（为什么仍 skeleton）**：上式只对标准形成立。要得到任意闭可定向曲面 $S$，需要 (a) $S$ 同胚于某标准形 —— 即 `thm.classification-surfaces`（它本身依赖 Radó 与组合引理）；或 (b) 绕过分类，直接证 $\beta_{2}(S)=1$（基本类存在），再由 $\chi=\sum_{i}(-1)^{i}\beta_{i}$（`thm.euler-characteristic`）得 $\chi=1-2g+1$。两条路本图都没有闭合，故不删 status、不勾 ∎。

> 续见 notes/prop.eulerchar-genus.4.md
