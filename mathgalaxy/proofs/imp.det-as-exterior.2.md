# 外幂的一维性 + 存在唯一性 $\implies$ 行列式就是那个系数
`imp.det-as-exterior` · 推出 · strong 边 · 根 `../`

`def.exterior-power` 外幂 + `thm.det-exists-unique` 行列式的存在唯一性 → `thm.det-as-exterior` 行列式 = 最高外幂上的作用

对任意 $t\ell$ 有 $\varphi(t\ell) = t\varphi(\ell) = tc\ell$，故 $\varphi$ 就是「乘 $c$」。
3. **定出那个数**：定义 $D(v_1, \ldots, v_n) := $ 满足 $T(v_1)\wedge\cdots\wedge T(v_n) = D\cdot(e_1\wedge\cdots\wedge e_n)$ 的系数（先固定 $v_i = e_i$ 定义，再对一般 $v_i$ 用交错多重线性延拓）。

逐条验证 $D$ 满足多重线性、交错、规范化三条公理，由**行列式的存在唯一性**得 $D = \det T$。

于是 $(\bigwedge^{n}T)(v_1 \wedge \cdots \wedge v_n) = (\det T)(v_1 \wedge \cdots \wedge v_n)$。∎

> 第 3 步的做法值得记住：**先把「一维空间上的系数」定义出来，再用存在唯一性把它认成行列式** —— 这样就不必真的去算那个系数。
