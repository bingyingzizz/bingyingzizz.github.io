# imp.pid-fg-module-structure
`imp.pid-fg-module-structure` · 推出 · strong 边 · 根 `../`

`def.module` 模 + `def.pid` 主理想整环 + `thm.smith-normal-form` Smith 标准形 → `thm.pid-fg-module-structure` PID 上有限生成模的结构

取 $K$ 的 $R$-基为列向量 $a_1,\ldots,a_m$，组成 $n\times m$ 矩阵 $A$。换基给出 $M\cong R^n/K=\operatorname{coker}(A)$。对 $A$ 用 Smith 标准形：存在 $P\in\operatorname{GL}_n(R)$、$Q\in\operatorname{GL}_m(R)$ 使
$$PAQ=\operatorname{diag}(d_1,\ldots,d_r,0,\ldots,0),\qquad d_1\mid\cdots\mid d_r.$$
左乘 $P$、右乘 $Q$ 只是换 $R^n$ 与 $R^m$ 的基，故 $\operatorname{coker}(A)\cong\operatorname{coker}(PAQ)$。后者的像由 $d_1e_1,\ldots,d_re_r$ 生成，故
$$\operatorname{coker}(PAQ)\cong R^{n-r}\oplus R/(d_1)\oplus\cdots\oplus R/(d_r).$$
删去单位 $d_i$（此时 $R/(d_i)=0$），余下的非零非单位项仍满足整除链，即得所述分解。

> 续见 proofs/imp.pid-fg-module-structure.3.md
