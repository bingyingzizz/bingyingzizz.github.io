# 外幂的一维性 + 存在唯一性 $\implies$ 行列式就是那个系数
`imp.det-as-exterior` · 推出 · strong 边 · 根 `../`

`def.exterior-power` 外幂 + `thm.det-exists-unique` 行列式的存在唯一性 → `thm.det-as-exterior` 行列式 = 最高外幂上的作用

于是 $(\bigwedge^{n}T)(v_1 \wedge \cdots \wedge v_n) = (\det T)(v_1 \wedge \cdots \wedge v_n)$。∎

> 第 3 步的做法值得记住：**先把「一维空间上的系数」定义出来，再用存在唯一性把它认成行列式** —— 这样就不必真的去算那个系数。
