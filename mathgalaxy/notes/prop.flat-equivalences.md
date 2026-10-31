# 平坦的等价说法　`prop.flat-equivalences`　·　说明
根 `../`

**1 与 2 是同一句话**（右正合白送）。**2 与 3**：取 $M$ 的投射消解，$\operatorname{Tor}_{1}$ 度量的正是「张量之后丢掉的那块单射性」。

**3 蕴含 4**：由 $0 \to I \to R \to R/I \to 0$ 与 $\operatorname{Tor}_{1}^{R}(R, N) = 0$ 得长正合列

$$0 \longrightarrow \operatorname{Tor}_{1}^{R}(R/I, N) \longrightarrow I \otimes N \longrightarrow N,$$

故 $\operatorname{Tor}_{1}^{R}(R/I, N) = 0$ 推出 $I \otimes N \to N$ 单 ✓。

**4 蕴含 1**：只需对一切单射检验；先化到 $M$ 有限生成（$(-)\otimes N$ 保滤过余极限），再对生成元个数归纳，每一步用理想情形 —— 完整论证见 `thm.lambek` ✓。

⭐ **第 4 条是唯一能算的**：理想通常比子模少得多，而乘法映射 $I \otimes N \to N$ 又常能显式写出来。PID 上理想只有主理想，判据几乎自动（这就是「无挠即平坦」的来源）。
