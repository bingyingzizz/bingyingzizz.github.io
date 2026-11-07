# 完备性定理　`thm.completeness-first-order`　·　说明
根 `../`

**第三步：演绎定理（语句版）。** 若 $\sigma$ 是语句且 $\Gamma\cup\{\sigma\}\vdash\psi$，则 $\Gamma\vdash\sigma\to\psi$。对推导长度归纳：若该步是公理或 $\Gamma$ 中公式 $\theta$，用 (A1) $\theta\to(\sigma\to\theta)$ 与分离规则；若是分离规则，用 (A2)；若是推广 $\theta\mapsto\forall x\,\theta$，归纳假设给 $\Gamma\vdash\sigma\to\theta$，推广得 $\Gamma\vdash\forall x(\sigma\to\theta)$，再由 (Q2)（$\sigma$ 无自由 $x$）与分离规则得 $\Gamma\vdash\sigma\to\forall x\,\theta$。∎

**推论**：若 $\Gamma\cup\{\sigma\}$ 不一致，则 $\Gamma\vdash\neg\sigma$；特别地，若 $\Gamma\cup\{\neg\varphi\}$ 不一致，则 $\Gamma\vdash\varphi$。证明：演绎定理给 $\Gamma\vdash\sigma\to\psi$ 与 $\Gamma\vdash\sigma\to\neg\psi$，而 $(\sigma\to\psi)\to((\sigma\to\neg\psi)\to\neg\sigma)$ 是重言式，分离两次即得 $\Gamma\vdash\neg\sigma$。

> 续见 notes/thm.completeness-first-order.4.md
