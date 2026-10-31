# 张量积与外幂 $\implies$ 张量场是多重线性场的统一外壳
`imp.mf-tensor-field-smooth` · 推出 · strong 边 · 根 `../`

`def.vector-field` 向量场 + `def.exterior-algebra` 外代数 → `def.tensor-field` 张量场

$$\Phi(T) := \bigl(\varphi(p),\ (T^{i_{1}\cdots i_{r}}_{\ \ j_{1}\cdots j_{s}})\bigr),$$

即「起点」加「全部分量」。转移映射的作用是 $(x,\xi) \mapsto \bigl(\psi\varphi^{-1}(x),\ J_{r,s}(x)\,\xi\bigr)$，其中 $J_{r,s}$ 是 Jacobi 矩阵的 $r$ 次逆直积与 $s$ 次直积（对称群置换指标带来的重排只是固定的线性重编号）。$J_{r,s}$ 光滑，故与切丛（`imp.mf-tangent-bundle-smooth`）同一套论证给出光滑结构。

**光滑截面就是分量光滑。** 由 $\Phi$ 的定义，截面 $T$ 光滑当且仅当每个分量函数 $T^{i_{1}\cdots i_{r}}_{\ \ j_{1}\cdots j_{s}}$ 在卡上光滑；「只需查一个图册」与向量场情形逐字相同。∎

⭐ 于是「张量场」不是新对象，而是把函数 / 向量场 / 形式 / 度量 / 曲率放进同一个纤维里数指标的框架。
